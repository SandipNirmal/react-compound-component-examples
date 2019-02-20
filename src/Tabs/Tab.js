import React from "react";

const Tab = ({ name, handleClick, selected }) => {
  const classNames = selected ? "tab tab-selected" : "tab";

  return (
    <div onClick={handleClick} className={classNames}>
      {name}
    </div>
  );
};

export default Tab;
