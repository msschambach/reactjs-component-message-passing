import React, { Component } from 'react'

class CurrencyConverterForm extends Component {

    handleOnChange = (event) => {
        this.props.messageService.next({
            value: event.target.value,
            currency: this.props.currency
        });
    };

    render() {
        return (
            <form className="currency-converter-form">
                <label>{this.props.currency}</label>
                <input
                    type="text"
                    onChange={this.handleOnChange}
                    value={this.props.value} />
            </form>
        )
    }
}

export default CurrencyConverterForm;
