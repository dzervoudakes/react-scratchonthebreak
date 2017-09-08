import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home, Generic, Scratched } from './Scratch.jsx';

const path = window.location.pathname;

const createFbLikeButton = (d, s, id) => {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = '//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.10';
    fjs.parentNode.insertBefore(js, fjs);
};

const createTwitterShareButton = (d, s, id) => {
    var js, fjs = d.getElementsByTagName(s)[0],
    t = window.twttr || {};
    if (d.getElementById(id)) return t;
    js = d.createElement(s);
    js.id = id;
    js.src = 'https://platform.twitter.com/widgets.js';
    fjs.parentNode.insertBefore(js, fjs);
    t._e = [];
    t.ready = function(f) {
        t._e.push(f);
    };
};

class ScratchOnTheBreak extends React.Component {
    render() {
        return (
            <div className="main-content">
                <h1 className="page-title">Scratch On The Break</h1>
                <div id="fb-root"></div>
                <div
                    className="fb-like"
                    data-href="http://www.scratchonthebreak.com"
                    data-layout="button_count"
                    data-action="like"
                    data-size="small"
                    data-show-faces="false"
                    data-share="true">
                </div>
                <a
                    className="twitter-share-button"
                    data-text="Check out scratchonthebreak.com!"
                    href="https://twitter.com/intent/tweet">
                    Tweet
                </a>
                {createFbLikeButton(document, 'script', 'facebook-jssdk')}
                {createTwitterShareButton(document, 'script', 'twitter-wjs')}
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
                <hr className="gray-rule" />
                <div className="links-bar">
                    <a href={path} id="homeLink" className="home-link">Home</a>
                    <a href="mailto:mcpeaven@gmail.com?subject=I'm%20An%20Idiot">I'm Mad</a>
                </div>
                <p className="t-copyright">&copy; McPeaven {new Date().getFullYear()}</p>
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