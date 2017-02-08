import winston from 'winston'

export const logger = new winston.Logger({
  transports: [
    new winston.transports.Console({
      level: 'debug',
      handleExceptions: true,
      humanReadableUnhandledException: true,
      timestamp: true,
      colorize: true,
    }),
    new winston.transports.File({
      level: 'info',
      handleExceptions: true,
      json: false,
      filename: 'logs/app.log',
      maxsize: 1024 * 1024, // 1 MiB
      maxFiles: 5,
    }),
  ],
  exitOnError: false,
})
