import React from "react";

import TabsContext from "./TabContext";

const TabDetails = () => {
  return (
    <div className="details">
      <TabsContext.Consumer>
        {({ selectedDetails }) => <div>{selectedDetails}</div>}
      </TabsContext.Consumer>
    </div>
  );
};

export default TabDetails;
