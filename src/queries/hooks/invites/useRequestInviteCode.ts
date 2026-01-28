import { useMutation } from "@tanstack/react-query";
import { requestInviteCode } from "../../services";
import { AuthHeaders, RequestInviteCodePayload } from "../../types";

type RequestInviteCodeParams = {
  payload: RequestInviteCodePayload;
  authHeaders: AuthHeaders;
};

export const useRequestInviteCode = () => {
  return useMutation({
    mutationFn: ({ payload, authHeaders }: RequestInviteCodeParams) => 
      requestInviteCode(payload, authHeaders),
  });
};
