import React from 'react';
import { Link } from 'react-router-dom';
import { RaisedButton } from 'material-ui';

export class ButtonBar extends React.Component {
	render() {
		const { yes, no } = this.props;
		return (
			<div className="button-bar">
				<Link to={`/${yes}`}>
					<RaisedButton primary label="Yes" />
				</Link>
				<Link to={`/${no}`}>
					<RaisedButton primary label="No" />
				</Link>
			</div>
		);
	}
}