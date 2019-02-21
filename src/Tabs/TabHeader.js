import React from "react";

import TabsContext from "./TabContext";
import Tab from "./Tab";

const TabHeader = () => {
  return (
    <div className="tabheader">
      <TabsContext.Consumer>
        {({ headers, selectedTabIndex, selectTab }) => {
          return headers.map(({ name }, index) => (
            <Tab
              name={name}
              key={index}
              selected={selectedTabIndex === index}
              handleClick={() => {
                selectTab(index);
              }}
            />
          ));
        }}
      </TabsContext.Consumer>
    </div>
  );
};

export default TabHeader;
