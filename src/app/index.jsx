import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Footer, Generic, Header, Home } from './components';

class ScratchOnTheBreak extends React.Component {
    render() {
        const text = {
            sob: 'Was the eightball also pocketed on the break?',
            nsob: 'Why are you on this site if no one scratched on the break?',
            eob: 'Your opponent lost, unlucky for him or her. He or she probably would have whooped you...',
            neob: 'Your opponent didn\'t lose. You are an idiot. You should apologize for not knowing the rules.'
        };
        return (
            <div className="main-content">
                <Header />
                <BrowserRouter basename="/">
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/sob">
                            <Generic text={text.sob} showButtons={true} />
                        </Route>
                        <Route path="/nsob">
                            <Generic text={text.nsob} showButtons={false} />
                        </Route>
                        <Route path="/eob">
                            <Generic text={text.eob} showButtons={false} />
                        </Route>
                        <Route path="/neob">
                            <Generic text={text.neob} showButtons={false} />
                        </Route>
                    </Switch>
                </BrowserRouter>
				<Footer />
            </div>
        );
    }
}

const scratchTheme = {
    fontFamily: 'Lato, sans-serif',
    palette: {
        primary1Color: '#00bcd4'
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