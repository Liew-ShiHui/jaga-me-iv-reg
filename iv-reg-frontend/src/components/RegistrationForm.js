import React, { Component } from 'react';
import AccountPage from './AccountPage';
import AddressPage from './AddressPage';
import Confirm from './Confirm';
import LastPage from './LastPage';
import MoreDetails from './MoreDetails';
import Success from './Success';

export class RegistrationForm extends Component {

    state = {
        step: 1,
        data: {
            firstName: '',
            lastName: '',
            contactNumber: '',
            email: '',
            addressLine1: '',
            addressLine2: '',
            postalCode: '',
            country: 'Singapore',
            currency: 'SGD',
            paymentMethod: 'Credit Card',
            referralSource: '',
            preferredModeOfComm: '',
        }
    }

    // proceed to next step
    nextStep = () => {
        const { step } = this.state;
        this.setState({ step: step + 1 });
    };

    // go back to previous step
    prevStep = () => {
        const { step } = this.state;
        this.setState({ step: step - 1 });
    };

    // Handle change of fields from user input
    handleChange = event => {
        this.setState({
            data: {
                ...this.state.data,
                [event.target.name]: event.target.value
            }
        });

        console.log(this.state.data);
    };

    render() {
        const { step } = this.state;

        const { firstName, lastName, contactNumber, email, addressLine1, addressLine2, postalCode,
            country, currency, paymentMethod, referralSource, preferredModeOfComm } = this.state.data;

        const values = {
            firstName, lastName, contactNumber, email, addressLine1, addressLine2, postalCode,
            country, currency, paymentMethod, referralSource, preferredModeOfComm
        };

        switch (step) {
            case 1:
                return (
                    <AccountPage
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values} />
                );
            case 2:
                return (
                    <AddressPage
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values} />
                );
            case 3:
                return (
                    <MoreDetails
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values} />
                );
            case 4:
                return (
                    <LastPage
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values} />
                );
            case 5:
                return (
                    <Confirm
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values} />
                );
            case 6:
                return (
                    <Success />
                );
            default:
                return (<AccountPage
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                    values={values} />
                );
        }
    }
}

export default RegistrationForm;