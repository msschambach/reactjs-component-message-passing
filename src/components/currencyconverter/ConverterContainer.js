import React, { Component } from 'react';
import Converter from './Converter';
import { Subject } from 'rxjs';

class ConverterContainer extends Component {

    constructor(props){
        super(props);

        this.messageService = new Subject();
    }

    render() {
        return (
            <div className="converter-container">
            <Converter
                currency="usd"
                conversionRates={this.props.conversionRates}
                messageService={this.messageService} />
            <Converter
                currency="gbp"
                conversionRates={this.props.conversionRates}
                messageService={this.messageService} />
            <Converter
                currency="ksh"
                conversionRates={this.props.conversionRates}
                messageService={this.messageService} />


            </div>
        )
    }
}

export default ConverterContainer
