import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import logo from '../resources/logo.pink.large.png';

const referralOptions = [
    'Tan Tock Seng Hospital',
    'Singapore General Hospital',
    'Farrer Park Hospital',
    'National University Hospital',
    'Others'
];

export class LastPage extends Component {

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
                                Indicate Referral Source and Preferred Mode of Communication</Typography>
                        </Toolbar>
                    </AppBar>
                    <br />

                    {/* To let user select referral source */}
                    <FormControl style={{ width: "40%", marginBottom: "20px" }}>
                        <FormLabel>Referral Source</FormLabel>
                        <RadioGroup name="referalSource" value={values.referalSource} onChange={handleChange}>
                            {referralOptions.map((option) => (
                                <FormControlLabel key={option} value={option} control={<Radio />} label={option} />
                            ))}
                        </RadioGroup>
                    </FormControl>
                    <br />

                    {/* To let user select preferred mode of communication */}
                    <FormControl style={{ width: "40%", marginBottom: "20px" }}>
                        <FormLabel>Preferred Mode of Communication</FormLabel>
                        <RadioGroup name="preferredModeOfComm" value={values.preferredModeOfComm} onChange={handleChange}>
                            <FormControlLabel value="whatsapp" control={<Radio />} label="Whatsapp"/>
                            <FormControlLabel value="phone-call" control={<Radio />} label="Phone Call"/>
                        </RadioGroup>
                    </FormControl>
                    <br />

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

export default LastPage;