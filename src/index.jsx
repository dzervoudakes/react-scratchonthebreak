import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/App';
import './css/app';

const theme = {
	fontFamily: 'Lato, sans-serif',
	palette: {
		primary1Color: '#00bcd4'
	}
};

const Main = () => (
	<MuiThemeProvider muiTheme={getMuiTheme(theme)}>
		<Router basename="/">
			<App />
		</Router>
	</MuiThemeProvider>
);

ReactDOM.render(
	<Main />,
	document.getElementById('app')
);