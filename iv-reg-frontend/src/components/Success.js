import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import logo from '../resources/logo.pink.large.png';

export default function Success() {
    return (
        <MuiThemeProvider >
            <React.Fragment>

                <AppBar position="static">
                    <Toolbar>
                        <Typography noWrap><img src={logo} alt="Jaga-me logo" style={{width: "10%", marginLeft: "10px", marginRight: "10px"}}/>
                            Registration Successful!</Typography>
                    </Toolbar>
                </AppBar>
                <br />

                <h1>Thank You For Registering with Us</h1>

            </React.Fragment>
        </MuiThemeProvider>
    );
}