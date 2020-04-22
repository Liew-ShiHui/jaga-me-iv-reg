import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import logo from '../resources/logo.pink.large.png';

export class AccountPage extends Component {  

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    render() {
        const { values, handleChange } = this.props;

        return (

            <MuiThemeProvider>
                <React.Fragment>

                    <AppBar position="static">
                        <Toolbar>
                            <Typography noWrap>
                                <img src={logo} alt="Jaga-me logo" style={{width: "10%", marginLeft: "10px", marginRight: "10px"}}/>
                                IV Registration Page: Enter Account Details</Typography>
                        </Toolbar>
                    </AppBar>

                    <br />
                    <TextField
                        placeholder="Enter your first name"
                        label="First Name"
                        name="firstName"
                        onChange={handleChange}
                        defaultValue={values.firstName}
                    />
                    <br />

                    <TextField
                        placeholder="Enter your last name"
                        label="Last Name"
                        name="lastName"
                        onChange={handleChange}
                        defaultValue={values.lastName}
                    />
                    <br />

                    <TextField
                        placeholder="Enter your contact number"
                        label="Contact Number"
                        name="contactNumber"
                        onChange={handleChange}
                        defaultValue={values.contactNumber}
                    />
                    <br />

                    <TextField
                        placeholder="Enter your email"
                        label="Email"
                        name="email"
                        type="email"
                        onChange={handleChange}
                        defaultValue={values.email}
                    />
                    <br />
                    <br />

                    <Button colour="primary"
                        variant="contained"
                        onClick={this.continue}>
                            Continue
                    </Button>

                </React.Fragment>
            </MuiThemeProvider>
        );
    }
}

export default AccountPage;