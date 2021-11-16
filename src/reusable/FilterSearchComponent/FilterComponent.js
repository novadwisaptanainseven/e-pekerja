import React from "react";
import ClearButton from "./ClearButton";
import TextField from "./TextField";

const FilterComponent = ({
  filterText,
  onFilter,
  onClear,
  titleCari = "Pencarian...",
}) => (
  <>
    <TextField
      id="search"
      type="text"
      placeholder={titleCari}
      aria-label="Search Input"
      value={filterText}
      onChange={onFilter}
    />
    <ClearButton type="button" onClick={onClear}>
      Reset
    </ClearButton>
  </>
);

export default FilterComponent;
