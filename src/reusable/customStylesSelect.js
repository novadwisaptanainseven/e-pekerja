const customStylesSelect = (touchedSelect) => {
  return {
    control: (provided, state) => ({
      ...provided,
      border: !touchedSelect ? provided.border : "1px solid #e55353",
    }),
  };
};

export default customStylesSelect;
