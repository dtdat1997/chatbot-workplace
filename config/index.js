const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  PORT: process.env.PORT,
  DATABASE_URL: process.env.DATABASE_URL.replace('<PASSWORD>', process.env.DATABASE_PASSWORD).replace('<DBNAME>', process.env.DATABASE_NAME),
  JWT_SECRET: process.env.JWT_SECRET,
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN,
  WORKPLACE_API_ORIGIN: process.env.WORKPLACE_API_ORIGIN,
  WORKPLACE_WEBHOOK_VERIFY_TOKEN: process.env.WORKPLACE_WEBHOOK_VERIFY_TOKEN,
  CHAT_BOT_ACCESS_TOKEN: process.env.CHAT_BOT_ACCESS_TOKEN
};
