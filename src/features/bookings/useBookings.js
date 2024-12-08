import { useQuery, useQueryClient } from "@tanstack/react-query";

import useUrl from "../../hooks/useUrl";

import { getBookings } from "../../services/apiBookings";
import { PAGE_SIZE } from "../../utils/constants";

export function useBookings() {
  const queryClient = useQueryClient();

  const { currentFilter: filterValue } = useUrl("status");
  const { currentFilter: sortByRow } = useUrl("sortBy", "startDate-desc");
  const { currentFilter: page } = useUrl("page", 1);

  const currentPageAsNumber = +page;

  const [field, direction] = sortByRow.split("-");
  const sortBy = { field, direction };

  const filter =
    !filterValue || filterValue === "all"
      ? null
      : { field: "status", value: filterValue };

  const { data: { data: bookings, count } = {}, isLoading } = useQuery({
    queryKey: ["bookings", filter, sortBy, currentPageAsNumber],
    queryFn: () => getBookings({ filter, sortBy, currentPageAsNumber }),
  });

  const pageCount = Math.ceil(count / PAGE_SIZE);

  if (currentPageAsNumber < pageCount)
    queryClient.prefetchQuery({
      queryKey: ["bookings", filter, sortBy, currentPageAsNumber + 1],
      queryFn: () =>
        getBookings({
          filter,
          sortBy,
          currentPageAsNumber: currentPageAsNumber + 1,
        }),
    });

  if (currentPageAsNumber > 1)
    queryClient.prefetchQuery({
      queryKey: ["bookings", filter, sortBy, currentPageAsNumber - 1],
      queryFn: () =>
        getBookings({
          filter,
          sortBy,
          currentPageAsNumber: currentPageAsNumber - 1,
        }),
    });

  return { bookings, isLoading, count };
}
