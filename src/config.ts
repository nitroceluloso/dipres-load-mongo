
import { config } from "dotenv";
config();

export const globalConfig = {
    DIPRESS_WEB: process.env.DIPRES_WEB || "https://www.dipres.gob.cl/597/w3-propertyvalue-23076.html",
    MINIMUM_YEAR: process.env.MINIMUM_YEAR || 2018,
    ENVIROMENT: process.env.ENVIROMENT || "develop"
}