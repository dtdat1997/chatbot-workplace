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
        // console.log(req.body);
        if (!req.body.uuid) return next(new AppError(401, 'fail', 'UserID must be required'), req, res, next);
        if (!req.body.text) return next(new AppError(401, 'fail', 'Text must be required'), req, res, next);

        const params = {
            'recipient': {
                'id': req.body.uuid
            },
            'message': {
                'text': req.body.text
            }
        };
        console.log();

        const response = axios.post(config.WORKPLACE_API_ORIGIN + '/me/messages', params, workplace_api_headers).then(rs => {
                console.log(rs);
            }).catch(err => {
                console.log(err);
        });


        // res.status(204).json({
        //     status: 'success',
        //     data: null
        // });


    } catch (error) {
        next(error);
    }
};

exports.webhook = async (req, res, next) => {
    try {
        // await User.findByIdAndUpdate(req.user.id, {
        //     active: false
        // });
        console.log(req.body);

        res.status(204).json({
            status: 'success',
            data: null
        });


    } catch (error) {
        next(error);
    }
};

// exports.getAllUsers = base.getAll(User);
// exports.getUser = base.getOne(User);

// // Don't update password on this 
// exports.updateUser = base.updateOne(User);
// exports.deleteUser = base.deleteOne(User);
