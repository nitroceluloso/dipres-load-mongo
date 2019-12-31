
import * as winston from "winston";

const logger = winston.createLogger({
    transports: [
        new winston.transports.Console({
            format: winston.format.simple()
        }),
    ]
});

export const log = (...message: Array<string|number>) => {
    logger.info(message.join(" "));
}