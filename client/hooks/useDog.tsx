import { useQuery } from "react-query";
import { api } from "../lib/api";

export const useDog = (dogId: string) => {
  const { data, isLoading } = useQuery(["useDog", { dogId }], () =>
    api({
      method: "GET",
      url: `/dogs/${dogId}`,
    })
  );

  return { data, isLoading };
};
