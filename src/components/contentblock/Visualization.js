import React, { Component } from 'react'

class Visualization extends Component {
    render() {
        return (
            <div className="visualization">
                <p>{this.props.message}</p>
            </div>
        )
    }
}

export default Visualization
