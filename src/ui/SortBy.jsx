import useUrl from "../hooks/useUrl";
import Select from "./Select";

function SortBy({ options }) {
  const { currentFilter, handleFn: handleChange } = useUrl("sortBy", "");

  return (
    <Select
      value={currentFilter}
      type="white"
      options={options}
      onChange={handleChange}
    />
  );
}

export default SortBy;
