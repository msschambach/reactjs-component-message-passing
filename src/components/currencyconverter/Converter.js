import React, { Component } from 'react';
import CurrencyConverterForm from './CurrencyConverterForm';
import {distinctUntilChanged, debounceTime } from 'rxjs/operators';

class Converter extends Component {

    constructor(props){
        super(props);

        this.state = {
            value: 0
        };
    }

    componentWillMount(){
        this.subscription = this.props.messageService
        .pipe(
            distinctUntilChanged(),
            debounceTime(50)
        )
        .subscribe({
            next: (message) => {
                console.log(message)
                this.convert(message.currency, message.value)
            }
        });
    }

    

    componentWillUnmount(){
        this.subscription.unsubscribe();
    }

    convert = (currency, value) => {
        const props = Object.assign({}, this.props);
        const newValue = value * props.conversionRates[currency][props.currency];

        this.setState({ 
            value: newValue
        });
    };

    render() {
        return (
            <div className="converter">
                <CurrencyConverterForm
                currency={this.props.currency}
                value={this.state.value} 
                messageService={this.props.messageService}/>
            </div>
        )
    }
}

export default Converter
