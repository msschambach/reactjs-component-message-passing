import React, { Component } from 'react';
import VisualizationContainer from './VisualizationContainer';

export default class ContentBlock extends Component {

    constructor(props) {
        super(props);

        this.state = {
            activeGroup: 'group1'
        };
    }

    setActiveGroup = (group) => {
        this.setState({
            activeGroup: group
        });
    };

    render() {
        return (
            <article className="content-block">
                <h1>Content Block</h1>
                <section>
                    <VisualizationContainer
                        index={0}
                        activeGroup={this.state.activeGroup}
                        setActiveGroup={this.setActiveGroup}
                        visualizations={this.props.visualizationContainers[0]} />

                    <VisualizationContainer
                        index={1}
                        activeGroup={this.state.activeGroup}
                        setActiveGroup={this.setActiveGroup}
                        visualizations={this.props.visualizationContainers[1]} />

                    <VisualizationContainer
                        index={2}
                        activeGroup={this.state.activeGroup}
                        setActiveGroup={this.setActiveGroup}
                        visualizations={this.props.visualizationContainers[2]} />
                </section>
            </article>
        )
    }
}
