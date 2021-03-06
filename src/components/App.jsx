import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './header';
import Home from './home';
import Footer from './footer';
import Missing from './missing';
import { Generic } from './common';

const App = () => {
	const text = {
		sob: 'Was the eightball also pocketed on the break?',
		nsob: 'Why are you on this site if no one scratched on the break?',
		eob: 'Your opponent lost, unlucky for him. He probably would have whooped you.',
		neob: 'Your opponent didn\'t lose. You should apologize for not knowing the rules.'
	};
	const keys = Object.keys(text);
	const routes = keys.map((key, index) =>
		<Route exact path={ `/${key}` } key={ index }>
			<Generic text={ text[key] } showButtons={ key === 'sob' ? true : false } />
		</Route>
	);
	return (
		<div className="main-content">
			<Header />
			<Switch>
				<Route exact path="/" component={ Home } />
				{ routes }
				<Route component={ Missing } />
			</Switch>
			<Footer />
		</div>
	);
};

export default App;
