import React, { Fragment } from 'react';

export class Footer extends React.Component {
	render() {
		return (
			<Fragment>
				<hr className="gray-rule" />
                <div className="links-bar">
                    <a href="/" id="homeLink" className="home-link">Home</a>
                    <a href="mailto:mcpeaven@gmail.com?subject=I'm%20An%20Idiot">I'm Mad</a>
                </div>
                <p className="t-copyright">&copy; McPeaven {new Date().getFullYear()}</p>
			</Fragment>
		);
	}
}