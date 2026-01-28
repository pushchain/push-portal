import { useMutation } from "@tanstack/react-query";
import { AdvancedSybilCheckParams } from "../../types";
import { callAdvancedSybilCheck } from "../../services";
import { advancedSybilCheck } from "../../queryKeys";

export const useAdvancedSybilCheck = () => {
  return useMutation({
    mutationKey: [advancedSybilCheck],
    mutationFn: (params: AdvancedSybilCheckParams) => callAdvancedSybilCheck(params),
  });
};
