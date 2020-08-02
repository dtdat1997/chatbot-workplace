const axios = require('axios');
const base = require('./baseController');
const config = require('../config');

const workplace_api_headers = {
  headers: {
    'content-type': 'application/json',
    Authorization: 'Bearer ' + config.CHAT_BOT_ACCESS_TOKEN
  }
};

// Workplace WB
exports.validateWHWorkplace = async (req, res, next) => {
    try {
        // get query params
        const request = req._parsedUrl.query.split('&');
        request.forEach( function(element, index) {
            var item = element.split('=');
            req.query[item[0]] = item[1];
        });

        if (req.query['hub.mode'] === 'subscribe' &&
            req.query['hub.verify_token'] === config.WORKPLACE_WEBHOOK_VERIFY_TOKEN) {
            res.status(200).send(req.query['hub.challenge']);
        } else {
            res.status(403).json({ msg: 'Failed validation. Make sure the validation tokens match.' });
        }
    } catch (error) {
        next(error);
    }
};

exports.receivedWHWorkplace = async (req, res, next) => {
    try {
        // get query params
        //console.log(req.body.entry[0].messaging[0].message.text);
        let uuid = req.body.entry[0].messaging[0].sender.id
    	let message = req.body.entry[0].messaging[0].message.text
    	console.log(uuid, message);
    	//sendMessage(uuid, message)
    	res.sendStatus(200);
    } catch (error) {
        next(error);
    }
};


// Git WB
exports.validateWHGit = async (req, res, next) => {
    try {
        // get query params
        const request = req._parsedUrl.query.split('&');
        request.forEach( function(element, index) {
            var item = element.split('=');
            req.query[item[0]] = item[1];
        });

        if (req.query['hub.mode'] === 'subscribe' &&
            req.query['hub.verify_token'] === config.WORKPLACE_WEBHOOK_VERIFY_TOKEN) {
            res.status(200).json(req.query['hub.challenge']);
        } else {
            res.status(403).json({ msg: 'Failed validation. Make sure the validation tokens match.' });
        }
    } catch (error) {
        next(error);
    }
};

exports.receivedWHGit = async (req, res, next) => {
    try {
        // get query params
        const request = req._parsedUrl.query.split('&');
        request.forEach( function(element, index) {
            var item = element.split('=');
            req.query[item[0]] = item[1];
        });

        if (req.query['hub.mode'] === 'subscribe' &&
            req.query['hub.verify_token'] === config.WORKPLACE_WEBHOOK_VERIFY_TOKEN) {
            res.status(200).json(req.query['hub.challenge']);
        } else {
            res.status(403).json({ msg: 'Failed validation. Make sure the validation tokens match.' });
        }
    } catch (error) {
        next(error);
    }
};

// Backlog WB
exports.validateWHBacklog = async (req, res, next) => {
    try {
        // get query params
        const request = req._parsedUrl.query.split('&');
        request.forEach( function(element, index) {
            var item = element.split('=');
            req.query[item[0]] = item[1];
        });

        if (req.query['hub.mode'] === 'subscribe' &&
            req.query['hub.verify_token'] === config.WORKPLACE_WEBHOOK_VERIFY_TOKEN) {
            res.status(200).json(req.query['hub.challenge']);
        } else {
            res.status(403).json({ msg: 'Failed validation. Make sure the validation tokens match.' });
        }
    } catch (error) {
        next(error);
    }
};

exports.receivedWHBacklog = async (req, res, next) => {
    try {
        // get query params
        const request = req._parsedUrl.query.split('&');
        request.forEach( function(element, index) {
            var item = element.split('=');
            req.query[item[0]] = item[1];
        });

        if (req.query['hub.mode'] === 'subscribe' &&
            req.query['hub.verify_token'] === config.WORKPLACE_WEBHOOK_VERIFY_TOKEN) {
            res.status(200).json(req.query['hub.challenge']);
        } else {
            res.status(403).json({ msg: 'Failed validation. Make sure the validation tokens match.' });
        }
    } catch (error) {
        next(error);
    }
};


