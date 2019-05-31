import React, { Component } from 'react';
import PubSubContentBlock from './components/rxjs_example/ContentBlock';
import ContextualizedContentBlock from './components/context_api_example/ContentBlock';
import PropDrillingContentBlock from './components/prop_drill_example/ContentBlock';
import { visualization_containers, conversion_rates } from './resources/data';


class App extends Component {
  constructor(props) {
    super(props);

    this.visualizationContainers = visualization_containers;
    this.conversionRates = conversion_rates;
  }
  render() {
    return (
      <div>
        <h1>Content Block Example Using Observables</h1>
        <PubSubContentBlock visualizationContainers={this.visualizationContainers} />

        <h1>Content Block Example Using the Context API</h1>
        <ContextualizedContentBlock visualizationContainers={this.visualizationContainers} />

        <h1>Context Block Example Using prop drilling</h1>
        <PropDrillingContentBlock visualizationContainers={this.visualizationContainers} />

      </div>
    );
  }
}

export default App;
