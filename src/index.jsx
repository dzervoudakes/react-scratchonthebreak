import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import App from './components';
import './css/styles';

const scratchTheme = {
	fontFamily: 'Lato, sans-serif',
	palette: {
		primary1Color: '#00bcd4'
	}
};

const Main = () => (
	<MuiThemeProvider muiTheme={getMuiTheme(scratchTheme)}>
		<App />
	</MuiThemeProvider>
);

ReactDOM.render(
	<Main />,
	document.getElementById('app')
);