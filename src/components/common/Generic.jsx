import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import ButtonBar from './ButtonBar';

const propTypes = {
	showButtons: PropTypes.bool.isRequired,
	text: PropTypes.string.isRequired
};

class Generic extends React.PureComponent {
	componentDidMount() {
		const homeLink = document.getElementById('homeLink');
		homeLink.classList.add('active');
	}

	render() {
		const { showButtons, text } = this.props;
		const renderButtons = () => {
			if (showButtons) return <ButtonBar yes="eob" no="neob" />;
		};
		return (
			<Fragment>
				<p className="sub-header">{ text }</p>
				{ renderButtons() }
			</Fragment>
		);
	}
}

Generic.propTypes = propTypes;

export default Generic;
