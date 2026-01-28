import { useMutation } from "@tanstack/react-query";
import { rejectSquadInvite as rejectSquadInviteKey } from "../../queryKeys";
import { rejectSquadInvite } from "../../services";
import { RejectSquadInviteParams } from "../../types";

export const useRejectSquadInvite = () => {
  return useMutation({
    mutationKey: [rejectSquadInviteKey],
    mutationFn: (params: RejectSquadInviteParams) => rejectSquadInvite(params),
  });
};
