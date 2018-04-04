import React from 'react';
import { Link } from 'react-router-dom';
import { RaisedButton } from 'material-ui';

const ButtonBar = ({ yes, no }) => (
	<div className="button-bar">
		<Link to={`/${yes}`}>
			<RaisedButton primary label="Yes" />
		</Link>
		<Link to={`/${no}`}>
			<RaisedButton primary label="No" />
		</Link>
	</div>
);

export default ButtonBar;