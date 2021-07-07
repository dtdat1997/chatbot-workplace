const express = require('express');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser  =  require('body-parser');

const userRoutes = require('./routes/userRoutes');
const chatBotRoutes = require('./routes/chatBotRoutes');
const workPlaceWHRoutes = require('./routes/workPlaceWebHookRoutes');
const gitWHRoutes = require('./routes/gitWebHookRoutes');
const backLogWHRoutes = require('./routes/backLogWebHookRoutes');

const globalErrHandler = require('./controllers/errorController');
const AppError = require('./utils/appError');
const app = express();

// Allow Cross-Origin requests
app.use(cors());

// Logger Middleware
app.use(morgan('dev'));

// Set security HTTP headers
app.use(helmet());

// Limit request from the same API 
const limiter = rateLimit({
    max: 150,
    windowMs: 60 * 60 * 1000,
    message: 'Too Many Request from this IP, please try again in an hour'
});
app.use('/api', limiter);

// Body parser, reading data from body into req.body
app.use(express.json({
    limit: '15kb'
}));

// Data sanitization against Nosql query injection
app.use(mongoSanitize());

// Data sanitization against XSS(clean user input from malicious HTML code)
app.use(xss());

// Prevent parameter pollution
app.use(hpp());

app.use(bodyParser.json());

const apiVersion = '/api/v1/';

// Routes
app.use(apiVersion + 'users', userRoutes);
app.use(apiVersion + 'chatbots', chatBotRoutes);
app.use(apiVersion + 'workplace-webhook', workPlaceWHRoutes);
app.use(apiVersion + 'git-webhook', gitWHRoutes);
app.use(apiVersion + 'backlog-webhook', backLogWHRoutes);

// handle undefined Routes
app.use('*', (req, res, next) => {
    const err = new AppError(404, 'fail', 'undefined route');
    next(err, req, res, next);
});

app.use(globalErrHandler);

module.exports = app;
