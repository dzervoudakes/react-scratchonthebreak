import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home, Generic, Scratched } from './Scratch.jsx';

const path = window.location.pathname;

class ScratchOnTheBreak extends React.Component {
    render() {
        return (
            <div className="main-content">
                <h1 className="page-title">ScratchOnTheBreak.com</h1>
                {/*
                    @TODO: FB 'like' and 'share' buttons
                    @TODO: PayPal integration
                */}
                <BrowserRouter basename={path}>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/sob/">
                            <Generic text="Was the eightball also pocketed on the break?" showButtons={true} />
                        </Route>
                        <Route path="/nsob/">
                            <Generic text="Why are you on this site if no one scratched on the break?" showButtons={false} />
                        </Route>
                        <Route path="/eob/">
                            <Generic text="Your opponent lost, unlucky for him or her. He or she probably would have whooped you..." showButtons={false} />
                        </Route>
                        <Route path="/neob/">
                            <Generic text="Your opponent didn't lose. You are an idiot. You should apologize for not knowing the rules." showButtons={false} />
                        </Route>
                    </Switch>
                </BrowserRouter>
                <a href={path} id="homeLink" className="home-link">Home</a>
                <a href="mailto:mcpeaven@gmail.com?subject=I'm An Idiot">I'm Mad</a>
                <p className="t-copyright">&copy; McPeaven {new Date().getFullYear()}</p>
            </div>
        );
    }
}

const scratchTheme = {
    fontFamily: 'Open Sans, sans-serif', // @TODO: All the UI
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