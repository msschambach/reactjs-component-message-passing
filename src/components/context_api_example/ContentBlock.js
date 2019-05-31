import React, { Component } from 'react';
import VisualizationContainer from './VisualizationContainer';


export const ContentBlockContext = React.createContext();

export class ContentProvider extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeGroup: 'group1'
        }
    }

    setActiveGroup = (groupName) => {
        this.setState({
            activeGroup: groupName
        });
    };

    render() {
        const context = {
            activeGroup: this.state.activeGroup,
            setActiveGroup: this.setActiveGroup
        };

        return (
            <ContentBlockContext.Provider value={context}>
                {this.props.children}
            </ContentBlockContext.Provider>
        );
    }
}



export default class ContentBlock extends Component {
    render() {
        return (
            <ContentProvider>
                <article className="content-block">
                    <h1>Content Block</h1>
                    <section>
                        <VisualizationContainer
                            index={0}
                            visualizations={this.props.visualizationContainers[0]} />

                        <VisualizationContainer
                            index={1}
                            visualizations={this.props.visualizationContainers[1]} />

                        <VisualizationContainer
                            index={2}
                            visualizations={this.props.visualizationContainers[2]} />
                    </section>
                </article>
            </ContentProvider>
        )
    }
}
