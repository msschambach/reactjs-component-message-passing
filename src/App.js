import React, { Component } from 'react';
import ContentBlock from './components/ContentBlock';

class App extends Component {
  constructor(props) {
    super(props);

    this.visualizationContainers = [
      [
        {
          type: "plaintext",
          title: "Kudos!",
          group: "group1",
          message: "Well slap my head and call me silly! This works! 1"
        },
        {
          type: "plaintext",
          title: "Well Done!",
          group: "group2",
          message: "Well slap my head and call me silly! This works! 2"
        },
        {
          type: "plaintext",
          title: "Bravo!",
          group: "group3",
          message: "Well slap my head and call me silly! This works! 3"
        }
      ],
      [
        {
          type: "plaintext",
          title: "Awesome!",
          group: "group1",
          message: "Well slap my head and call me silly! This works! 1"
        },
        {
          type: "plaintext",
          title: "Excellent!",
          group: "group2",
          message: "Well slap my head and call me silly! This works! 2"
        },
        {
          type: "plaintext",
          title: "Sublime!",
          group: "group3",
          message: "Well slap my head and call me silly! This works! 3"
        },
      ],
      [
        {
          type: "plaintext",
          title: "Impressive!",
          group: "group1",
          message: "Well slap my head and call me silly! This works! 1"
        },
        {
          type: "plaintext",
          title: "Brilliant!",
          group: "group2",
          message: "Well slap my head and call me silly! This works! 2"
        },
        {
          type: "plaintext",
          title: "Amazing!",
          group: "group3",
          message: "Well slap my head and call me silly! This works! 3"
        },
      ]
    ]
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
