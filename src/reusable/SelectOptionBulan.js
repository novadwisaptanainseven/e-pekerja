import React from "react";

const SelectOptionBulan = () => {
  let bulanOptions = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];
  return (
    <>
      {bulanOptions.map((item, index) => (
        <option key={index} value={index + 1}>
          {item}
        </option>
      ))}
    </>
  );
};

export default React.memo(SelectOptionBulan);
