import { PushAPI } from "@pushprotocol/restapi";
import * as openpgp from "openpgp";

export const generateVerificationProof = async (
  data?: any,
  userPushSDKInstance?: PushAPI,
) => {
  console.log(data, userPushSDKInstance, "here we are");

  if (userPushSDKInstance && !userPushSDKInstance?.readmode()) {
    const sigingingMessage = JSON.stringify(data);

    console.log(sigingingMessage, "singing message");

    const messageObject: openpgp.Message<string> = await openpgp.createMessage({
      text: sigingingMessage,
    });
    const privateKey: openpgp.PrivateKey = await openpgp.readPrivateKey({
      armoredKey: userPushSDKInstance.decryptedPgpPvtKey as string,
    });

    console.log(messageObject, "message object", privateKey, "private key");

    const verificationProof = await openpgp.sign({
      message: messageObject,
      signingKeys: privateKey,
      detached: true,
    });

    return verificationProof;
  }
};
