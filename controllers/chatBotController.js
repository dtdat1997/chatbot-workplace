const axios = require('axios');
const base = require('./baseController');
const config = require('../config');

const workplace_api_headers = {
  headers: {
    'content-type': 'application/json',
    Authorization: 'Bearer ' + config.CHAT_BOT_ACCESS_TOKEN
  }
};

exports.sendMessage = async (req, res, next) => {
    try {
        if (!req.body.uuid) return next(new AppError(401, 'fail', 'UserID must be required'), req, res, next);
        if (!req.body.text) return next(new AppError(401, 'fail', 'Text must be required'), req, res, next);

        const params = {
            'recipient': {
                'id': req.body.uuid
            },
            'message': {
                'text': req.body.text
            }
        };s

        axios.post(config.WORKPLACE_API_ORIGIN + '/me/messages', params, workplace_api_headers).then(rs => {
            res.status(200).json({
                status: 'success',
                msg: 'Send message successful'
            });
        }).catch(err => {
            next(err);
        });
    } catch (error) {
        next(error);
    }
};

exports.webhook = async (req, res, next) => {
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
