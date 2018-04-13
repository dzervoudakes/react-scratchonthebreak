import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { RaisedButton } from 'material-ui';

const propTypes = {
	yes: PropTypes.string.isRequired,
	no: PropTypes.string.isRequired
};

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

ButtonBar.propTypes = propTypes;

export default ButtonBar;