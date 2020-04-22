import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import logo from '../resources/logo.pink.large.png';

export class AddressPage extends Component {  

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
                                Enter Address Details</Typography>
                        </Toolbar>
                    </AppBar>

                    <br />
                    <TextField
                        placeholder="Enter your address line 1"
                        label="Address Line 1"
                        name="addressLine1"
                        onChange={handleChange}
                        defaultValue={values.addressLine1}
                    />
                    <br />

                    <TextField
                        placeholder="Enter your address line 2"
                        label="Address Line 2"
                        name="addressLine2"
                        onChange={handleChange}
                        defaultValue={values.addressLine2}
                    />
                    <br />

                    <TextField
                        placeholder="Enter your postalCode"
                        label="Postal Code"
                        name="postalCode"
                        onChange={handleChange}
                        defaultValue={values.postalCode}
                    />
                    <br />

                    <TextField
                        placeholder="Enter your country"
                        label="Country"
                        name="country"
                        onChange={handleChange}
                        defaultValue={values.country}
                    />
                    <br />
                    <br />

                    <Button style={{margin: "5px"}}
                    colour="default"
                        variant="contained"
                        onClick={this.back}>
                            Back
                    </Button>

                    <Button style={{margin: "5px"}} 
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

export default AddressPage;