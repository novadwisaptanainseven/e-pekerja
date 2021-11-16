import { CButton } from "@coreui/react";
import React from "react";
import { useHistory } from "react-router";
import FilterComponent from "../FilterSearchComponent/FilterComponent";

const SubHeaderComponentMemo = ({
  filterText,
  setFilterText,
  setResetPaginationToggle,
  resetPaginationToggle,
  titleTombol,
  titleCari,
}) => {
  const history = useHistory();

  const handleClear = () => {
    if (filterText) {
      setResetPaginationToggle(!resetPaginationToggle);
      setFilterText("");
    }
  };

  const goToTambah = (id) => {
    history.push(`/epekerja/admin/pensiun/tambah`);
  };

  return (
    <>
      <div className="d-flex justify-content-between" style={{ width: "100%" }}>
        <CButton type="button" color="primary" onClick={goToTambah}>
          {titleTombol}
        </CButton>
        <div className="d-flex">
          <FilterComponent
            onFilter={(e) => setFilterText(e.target.value)}
            onClear={handleClear}
            filterText={filterText}
            titleCari={titleCari}
          />
        </div>
      </div>
    </>
  );
};

export default React.memo(SubHeaderComponentMemo);
