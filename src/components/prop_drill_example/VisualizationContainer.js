import React, { Component } from 'react'
import Visualization from './Visualization';


export default class VisualizationContainer extends Component {

    getVisualizationInGroup = (group) => {
        return this.props.visualizations.findIndex(viz => viz.group === group)
    }

    setActiveVisualization = (index, setActiveGroup) => {
        setActiveGroup(this.props.visualizations[index].group);
    };

    render() {
        const visualizationListOptions = this.props.visualizations.map((viz, index) => {
            return <option key={index} value={index}>{viz.title}</option>;
        });

        const activeVisualization = this.getVisualizationInGroup(this.props.activeGroup);
        const message = this.props.visualizations[activeVisualization].message;

        return (
            <div className="visualization-container">
                <h3>Visualization Container {this.props.index}</h3>
                <Visualization message={message} />

                <form>
                    <select
                        onChange={(event) => { this.setActiveVisualization(event.target.value, this.props.setActiveGroup) }}
                        value={this.getVisualizationInGroup(this.props.activeGroup)}>
                        {visualizationListOptions}
                    </select>
                </form>
            </div>
        );
    }
}
