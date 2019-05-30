import React, { Component } from 'react';
import ContentBlock from './components/contentblock/ContentBlock';
import { visualization_containers } from './resources/data';

class App extends Component {
  constructor(props) {
    super(props);

    this.visualizationContainers = visualization_containers;
  }
  render() {
    return (
      <div>
        <ContentBlock visualizationContainers={this.visualizationContainers} />
      </div>
    );
  }
}

export default App;
