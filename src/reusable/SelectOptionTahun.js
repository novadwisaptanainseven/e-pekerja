import React from "react";

const SelectOptionTahun = () => {
  let curYear = new Date().getFullYear();
  let bottomLimitYear = 2018;

  let tahunOptions = [];

  for (let i = bottomLimitYear; i <= curYear; i++) {
    tahunOptions.push(i);
  }

  return (
    <>
      {tahunOptions.map((item, index) => (
        <option key={index} value={item}>
          {item}
        </option>
      ))}
    </>
  );
};

export default React.memo(SelectOptionTahun);
