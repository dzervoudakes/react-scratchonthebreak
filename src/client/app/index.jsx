import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Scratch } from './Scratch.jsx';

const path = window.location.pathname;

class ScratchOnTheBreak extends React.Component {
    render() {
        return (
            <BrowserRouter basename={path}>
                <Switch>
                    <Route exact path="/" component={Scratch} />
                </Switch>
            </BrowserRouter>
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