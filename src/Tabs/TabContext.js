import React from "react";

const TabsContext = React.createContext({
  selectedTabIndex: 0,
  selectTab: () => {},
  headers: [],
  selectedDetails: ''
});

export default TabsContext;
