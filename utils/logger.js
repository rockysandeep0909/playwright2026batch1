import { createLogger, format, transports } from 'winston';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const logFormat = format.printf(({ level, message, timestamp, stack }) => {
  return `${timestamp} [${level.toUpperCase()}]: ${stack || message}`;
});

const logger = createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.errors({ stack: true }),
    logFormat
  ),
  transports: [
    new transports.Console(),
    new transports.File({
      filename: path.join(__dirname, '../logs/error.log'),
      level: 'error',
      options: { flags: 'w' }
    }),
    new transports.File({
      filename: path.join(__dirname, '../logs/combined.log'),
      options: { flags: 'w' }
    })
  ]
});

export default logger;
