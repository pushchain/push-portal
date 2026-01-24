import { useMutation } from "@tanstack/react-query";
import { createSquad as createSquadKey } from "../../queryKeys";
import { createSquad } from "../../services";
import { CreateSquadParams } from "../../types";

export const useCreateSquad = () => {
  return useMutation({
    mutationKey: [createSquadKey],
    mutationFn: (params: CreateSquadParams) => createSquad(params),
  });
};
