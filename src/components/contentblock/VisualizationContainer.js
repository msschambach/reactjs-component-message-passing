import React, { Component } from 'react'
import Visualizaton from './Visualization';
import { distinctUntilChanged } from 'rxjs/operators';

class VisualizationContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeVisualization: 0
        };

    }

    componentWillMount() {
        this.messageSubscription = this.props.messageService
            .pipe(
                distinctUntilChanged()
            )
            .subscribe({
                next: (value) => {
                    const newActiveVisualization = this.props.visualizations.reduce((finalVal, currentVal) => {
                        if (currentVal.group === value.group) {
                            return currentVal;
                        }

                        return finalVal;
                    });

                    this.setState(prevState => {
                        return { activeVisualization: this.getVisualizationIndex(newActiveVisualization) }
                    });
                }
            });
    }

    componentWillUnmount() {
        this.messageSubscription.unsubscribe();
    }

    getVisualizationIndex = (visualization) => {
        return this.props.visualizations.findIndex(viz => viz.group === visualization.group);
    };

    getActiveVisualization = () => {
        return this.props.visualizations[this.state.activeVisualization];
    };

    setActiveVisualization = (index) => {
        this.setState(prevState => {
            return { activeVisualization: index }
        }, () => {
            this.props.messageService.next(this.getActiveVisualization());
        });
    };

    render() {
        const visualizationListOptions = this.props.visualizations.map((viz, index) => {
            return <option key={index} value={index}>{viz.title}</option>;
        });

        return (
            <div className="visualization-container">
                <h3>Visualization Container {this.props.index}</h3>
                <Visualizaton message={this.props.visualizations[this.state.activeVisualization].message} />

                <form>
                    <select onChange={(event) => { this.setActiveVisualization(event.target.value) }} value={this.state.activeVisualization}>
                        {visualizationListOptions}
                    </select>
                </form>
            </div>
        )
    }
}

export default VisualizationContainer
