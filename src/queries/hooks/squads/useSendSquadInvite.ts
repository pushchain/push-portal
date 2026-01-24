import { useMutation } from "@tanstack/react-query";
import { sendSquadInvite as sendSquadInviteKey } from "../../queryKeys";
import { sendSquadInvite } from "../../services";
import { SendSquadInviteParams } from "../../types";

export const useSendSquadInvite = () => {
  return useMutation({
    mutationKey: [sendSquadInviteKey],
    mutationFn: (params: SendSquadInviteParams) => sendSquadInvite(params),
  });
};
