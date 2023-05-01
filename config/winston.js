const {
  createLogger, format, transports,
} = require('winston');

const {
  combine, timestamp, printf, colorize,
} = format;

const myFormat = printf(({
  level, message, timestamp: timestampArg,
}) => `${timestampArg} ${level}: ${message}`);

const logger = createLogger({
  level: 'http',
  format: combine(
    timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    myFormat,
  ),
  transports: [
    new transports.File({ filename: './logs/error.log', level: 'error' }),
    new transports.File({ filename: './logs/combined.log' }),
  ],
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(new transports.Console({
    format: combine(
      colorize({ all: true }),
    ),
  }));
}

module.exports = logger;
