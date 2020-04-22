import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import logo from '../resources/logo.pink.large.png';

const currencyOptions = [
    'SGD',
    'USD',
    'EUR',
    'JPY',
];

export class MoreDetails extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const { values, handleChange } = this.props;

        return (

            <MuiThemeProvider>
                <React.Fragment>

                    <AppBar position="static">
                        <Toolbar>
                            <Typography noWrap><img src={logo} alt="Jaga-me logo" style={{width: "10%", marginLeft: "10px", marginRight: "10px"}}/>
                                Select currency code and default payment method</Typography>
                        </Toolbar>
                    </AppBar>
                    <br />

                    {/* To let user select currency code */}
                    <FormControl style={{ width: "180px", marginBottom: "20px"}}>
                        <InputLabel id="select-currency-code">Currency Code</InputLabel>
                        <Select
                            labelId="select-currency-code"
                            id="currency"
                            name="currency"
                            value={values.currency}
                            onChange={handleChange}
                        >
                            {currencyOptions.map((option) => (
                                <MenuItem key={option} value={option}>{option}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <br />

                    {/* To let user select default payment method */}            
                    <FormControl style={{ width: "180px", marginBottom: "20px"}}>
                        <InputLabel htmlFor="payment-method">Default payment method</InputLabel>
                        <Select
                            value={values.paymentMethod}
                            onChange={handleChange}
                            label="Default payment method"
                        >
                            <MenuItem value={"Credit Card"}>Credit Card</MenuItem>
                            <MenuItem value={"Debit Card"}>Debit Card</MenuItem>
                            <MenuItem value={"Cash"}>Cash</MenuItem>
                            
                        </Select>
                    </FormControl>

                    <br />
                    <br />

                    <Button style={{ margin: "5px" }}
                        colour="default"
                        variant="contained"
                        onClick={this.back}>
                        Back
                    </Button>

                    <Button style={{ margin: "5px" }}
                        colour="primary"
                        variant="contained"
                        onClick={this.continue}>
                        Continue
                    </Button>

                </React.Fragment>
            </MuiThemeProvider>
        );
    }
}

export default MoreDetails;