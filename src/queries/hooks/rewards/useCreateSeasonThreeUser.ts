import { useMutation } from "@tanstack/react-query";
import { createSeasonThreeUser } from "../../services";
import { createNewSeasonThreeUser } from "../../queryKeys";


export const useCreateSeasonThreeUser = () => {
  return useMutation({
    mutationKey: [createNewSeasonThreeUser],
    mutationFn: createSeasonThreeUser,
  });
};
