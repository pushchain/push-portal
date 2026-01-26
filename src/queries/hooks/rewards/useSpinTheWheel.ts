import { useMutation } from "@tanstack/react-query";
import { spinTheWheel } from "../../services";
import { AuthHeaders } from "../../types";

export const useSpinTheWheel = () => {
  return useMutation({
    mutationFn: (authHeaders: AuthHeaders) => spinTheWheel(authHeaders),
  });
};
