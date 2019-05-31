import React, { Component } from 'react';
import ContentBlock from './components/contentblock/ContentBlock';
import ConverterContainer from './components/currencyconverter/ConverterContainer';
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
        <h1>Content Block Example</h1>
        <ContentBlock visualizationContainers={this.visualizationContainers} />

        <h1>Currency Converter Example</h1>
        <ConverterContainer conversionRates={this.conversionRates} />
      </div>
    );
  }
}

export default App;
