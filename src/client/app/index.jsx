// @TODO: 'sob' route
// @TODO: 'nsob' route
// @TODO: 'eob' route
// @TODO: 'neob' route

// @TODO: All the UI

import React from 'react';
import ReactDOM from 'react-dom';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Scratch, Sob, Nsob, Eob, Neob } from './Scratch.jsx';

const path = window.location.pathname;

class ScratchOnTheBreak extends React.Component {
    render() {
        return (
            <div className="main-content">
                <h1 className="page-title">ScratchOnTheBreak.com</h1>
                {/*
                    @TODO: FB 'like' and 'share' buttons
                */}
                <BrowserRouter basename={path}>
                    <Switch>
                        <Route exact path="/" component={Scratch} />
                        <Route path="/sob/" component={Sob} />
                        <Route path="/nsob/" component={Nsob} />
                        <Route path="/eob/" component={Eob} />
                        <Route path="/neob/" component={Neob} />
                    </Switch>
                </BrowserRouter>
                {/*
                    @TODO: Home -- only show conditionally when not in the exact '/' route
                    @TODO: I'm Mad
                    @TODO: PayPal integration
                */}
                <p className="t-copyright">&copy; McPeaven {new Date().getFullYear()}</p>
            </div>
        );
    }
}

const scratchTheme = {
    fontFamily: 'Open Sans, sans-serif', // @TODO: update this to be moar unique
    palette: {
        primary1Color: '#0080ff'
    }
};

const App = () => {
    return (
        <MuiThemeProvider muiTheme={getMuiTheme(scratchTheme)}>
            <ScratchOnTheBreak />
        </MuiThemeProvider>
    );
};

ReactDOM.render(
    <App />,
    document.getElementById('app')
);