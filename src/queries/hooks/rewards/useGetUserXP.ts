import { useQuery } from "@tanstack/react-query";
import { userXP } from "../../queryKeys";
import { getUserXP } from "../../services";

export const useGetUserXP = ({ userId }: { userId: string }) =>
  useQuery({
    queryKey: [userXP, userId],
    queryFn: () => getUserXP(userId),
    enabled: !!userId,
  });
