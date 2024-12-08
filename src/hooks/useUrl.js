import { useSearchParams } from "react-router-dom";

function useUrl(filterField, defaultValue) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilter = searchParams.get(filterField) || defaultValue;

  const handleFn = (filterName, event, obj) => {
    searchParams.set(filterName, event);
    if (searchParams.get(obj?.filterName)) searchParams.set(obj?.filterName, 1);
    setSearchParams(searchParams);
  };

  return { currentFilter, handleFn };
}

export default useUrl;
