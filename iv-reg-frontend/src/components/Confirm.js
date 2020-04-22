import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import axios from '../axios';
import logo from '../resources/logo.pink.large.png';

export class Confirm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            consent: false
        }
    }

    continue = e => {
        e.preventDefault();
        if (!this.state.consent) {
            alert('Please check the consent checkbox before proceeding');
        } else {
            // process registration form to create new customer
            axios.post("/customers", this.props.values).then( response => {
                console.log(response.data);
            });
            this.props.nextStep();
        }
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }
    
    handleCheck = (e) => {
        this.setState({ consent: e.target.checked})
    }

    render() {
        return (

            <MuiThemeProvider>
                <React.Fragment>

                    <AppBar position="static">
                        <Toolbar>
                            <Typography noWrap><img src={logo} alt="Jaga-me logo" style={{width: "10%", marginLeft: "10px", marginRight: "10px"}}/>
                                Confirm Page</Typography>
                        </Toolbar>
                    </AppBar>
                    <br />

                    <FormControlLabel
                        control={ <Checkbox checked={this.state.consent} onChange={this.handleCheck} name="consent" colour="primary" />}
                        label="Please consent that information given is true, complete and accurate"
                    />
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
                        Register
                    </Button>

                </React.Fragment>
            </MuiThemeProvider>
        );
    }
}

export default Confirm;