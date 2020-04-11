
import mongoose from "mongoose";
import { globalConfig } from "./config";
import { Scraper } from "./service/scraper/Scraper";
import { Program } from "./model/program/Program";

import { Ministries } from "./service/ministry/Ministry.service";
import { PublicServices } from "./service/public-service/PublicService.service";
import { Programs } from "./service/program/Program.service";

class App {

    static async config() {
        if(globalConfig.ENVIROMENT === "develop") mongoose.set('debug', true);
        const mongoOptions = {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
        await mongoose.connect(globalConfig.MONGO_URI, mongoOptions);
    }

    static async scrap() {
        const scp = new Scraper(globalConfig.DIPRESS_WEB);
        const site = await scp.getSite();
        const rows = scp.getRegisterFromTable(site);
        return scp.parseToProgram(rows);
    }

    static async updateDb(list: Array<Program>) {
        const ministries = await Ministries.updateMinistries(list);
        const publicServices = await PublicServices.updatePublicServices(list);
        await Programs.updatePrograms(list, ministries, publicServices);
    }
}

export const main = async () => {
    try {
        await App.config();
        const list = await App.scrap();
        await App.updateDb(list)
    } catch (error) {
        (globalConfig.ENVIROMENT === "develop")? console.log(error) : console.log(error.message);
    }
    process.exit();

}