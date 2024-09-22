import { useQuery } from "@tanstack/react-query";
import { GetCabins } from "../../services/apiCabins";

export function useCabins() {
  const { data: cabins, isLoading } = useQuery({
    queryKey: ["cabins"],
    queryFn: GetCabins,
  });

  return { cabins, isLoading };
}
