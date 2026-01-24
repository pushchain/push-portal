import { useMutation } from "@tanstack/react-query";
import { acceptSquadInvite as acceptSquadInviteKey } from "../../queryKeys";
import { acceptSquadInvite } from "../../services";
import { AcceptSquadInviteParams } from "../../types";

export const useAcceptSquadInvite = () => {
  return useMutation({
    mutationKey: [acceptSquadInviteKey],
    mutationFn: (params: AcceptSquadInviteParams) => acceptSquadInvite(params),
  });
};
