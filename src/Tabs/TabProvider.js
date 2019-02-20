import React from "react";

import TabsContext from "./TabContext";

const tabsData = [
  {
    name: "EPL",
    description: "English Premier League"
  },
  {
    name: "IPL",
    description: "Indian Premier League"
  },
  {
    name: "Serie A",
    description: "Italian Football League"
  }
];

export default class Tabs extends React.Component {
  state = {
    selectedTabIndex: 0
  };

  selectTab = selectedTabIndex => {
    this.setState({
      selectedTabIndex
    });
  };

  render() {
    const {
      selectTab,
      state: { selectedTabIndex }
    } = this;

    console.log(selectedTabIndex);
    return (
      <TabsContext.Provider
        value={{
          selectedTabIndex,
          selectTab,
          headers: tabsData.map(({ name }) => ({ name })),
          selectedDetails: tabsData[selectedTabIndex].description
        }}
      >
        {this.props.children}
      </TabsContext.Provider>
    );
  }
}
