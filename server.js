const mongoose = require('mongoose');
const config = require('./config');

process.on('uncaughtException', err => {
    console.log('UNCAUGHT EXCEPTION!!! shutting down...');
    console.log(err);
    process.exit(1);
});

const app = require('./app');

// Connect the database
mongoose.connect(config.DATABASE_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(con => {
    console.log('DB connection Successfully!');
});

// Start the server
const port = config.PORT_BACKEND;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

process.on('unhandledRejection', err => {
    console.log('UNHANDLED REJECTION!!!  shutting down ...');
    console.log(err);
    process.exit(1);
});
