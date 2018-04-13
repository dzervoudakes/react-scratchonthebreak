import React, { Fragment } from 'react';

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
	t.ready = function (f) {
		t._e.push(f);
	};
};

const Header = () => (
	<Fragment>
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
	</Fragment>
);

export default Header;