'use strict';

const FanfouSDK = require('fanfou-sdk');

const {
  CONSUMER_KEY: consumerKey,
  CONSUMER_SECRET: consumerSecret,
  KINDLE_BOT
} = require('../../config');

const {
  OAUTH_TOKEN: botToken,
  OAUTH_TOKEN_SECRET: botTokenSecret
} = KINDLE_BOT;

const Fanfou = {};

Fanfou.authorize = (username, password) => {
	return new Promise(resolve => {
		const ff = new FanfouSDK({
			authType: 'xauth',
			consumerKey,
			consumerSecret,
			username,
			password
		});
		ff.xauth((err, res) => {
			if (err) {
				resolve({error: err.message});
			}	else {
				resolve(res);
			}
		});
	});
};

Fanfou.compose = (oauthToken, oauthTokenSecret, status) => {
	return new Promise(resolve => {
		const ff = new FanfouSDK({
			consumerKey,
			consumerSecret,
			oauthToken,
			oauthTokenSecret
		});
		ff.post('/statuses/update', {status}, (err, res) => {
			if (err) {
				resolve({error: err.message});
			}	else {
				resolve(res);
			}
		});
	});
};

Fanfou.timeline = () => {
	return new Promise(resolve => {
		const ff = new FanfouSDK({
			consumerKey,
			consumerSecret,
			oauthToken: botToken,
			oauthTokenSecret: botTokenSecret
		});
		ff.post('/statuses/home_timeline', {format: 'html'}, (err, res) => {
			if (err) {
				resolve({error: err.message});
			}	else {
				resolve(res);
			}
		});
	});
};

module.exports = Fanfou;
