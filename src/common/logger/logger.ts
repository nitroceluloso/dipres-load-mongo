
import winston from "winston";
import { globalConfig } from "../../config";

const logger = winston.createLogger({
    transports: [
        new winston.transports.Console({
            format: winston.format.simple()
        }),
    ]
});

export const log = (...message: Array<string|number>) => {
    const flag = globalConfig.ENVIROMENT !== "test";
    if(flag) logger.info(message.join(" "));
}