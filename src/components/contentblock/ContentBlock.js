import React, { Component } from 'react';
import VisualizationContainer from './VisualizationContainer';
import { Subject } from 'rxjs';

class ContentBlock extends Component {

    constructor(props) {
        super(props);

        this.messageService = new Subject();
    }


    render() {
        return (
            <div className="content-block">
                <h1>Content Block</h1>
                <VisualizationContainer
                    index={0}
                    messageService={this.messageService}
                    visualizations={this.props.visualizationContainers[0]} />

                <VisualizationContainer
                    index={1}
                    messageService={this.messageService}
                    visualizations={this.props.visualizationContainers[1]} />

                <VisualizationContainer
                    index={2}
                    messageService={this.messageService}
                    visualizations={this.props.visualizationContainers[2]} />
            </div>
        )
    }
}

export default ContentBlock
