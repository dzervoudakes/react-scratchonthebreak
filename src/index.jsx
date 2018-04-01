import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Header, Home, Generic, Footer } from './components';
import './css/styles';

class Main extends React.Component {
    render() {
        const text = {
            sob: 'Was the eightball also pocketed on the break?',
            nsob: 'Why are you on this site if no one scratched on the break?',
            eob: 'Your opponent lost, unlucky for him or her. He or she probably would have whooped you...',
            neob: 'Your opponent didn\'t lose. You are an idiot. You should apologize for not knowing the rules.'
		};
		const keys = Object.keys(text);
		const routes = keys.map((key, index) =>
			<Route path={`/${key}`} key={index}>
				<Generic text={text[key]} showButtons={key === "sob" ? true : false} />
			</Route>
		);
        return (
            <div className="main-content">
                <Header />
                <BrowserRouter basename="/">
                    <Switch>
                        <Route exact path="/" component={Home} />
						{routes}
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

const App = () => (
	<MuiThemeProvider muiTheme={getMuiTheme(scratchTheme)}>
		<Main />
	</MuiThemeProvider>
);

ReactDOM.render(
    <App />,
    document.getElementById('app')
);