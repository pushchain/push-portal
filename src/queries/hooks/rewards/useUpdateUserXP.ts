import { useMutation } from "@tanstack/react-query";
import { refreshUserXp } from "../../queryKeys";
import { updateUserXP } from "../../services";

export const useUpdateUserXP = () =>
  useMutation({
    mutationKey: [refreshUserXp],
    mutationFn: updateUserXP,
  });
