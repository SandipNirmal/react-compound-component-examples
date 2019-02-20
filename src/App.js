import React, {Component} from 'react';

import Tabs from "./Tabs/TabProvider";
import TabHeader from "./Tabs/TabHeader";
import TabDetail from "./Tabs/TabDetails";

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Tabs>
          <TabHeader/>
          <TabDetail/>
        </Tabs>
      </div>
    );
  }
}

export default App;
