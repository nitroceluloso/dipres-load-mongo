
import { globalConfig } from "./config";
import { Scraper } from "./models/scraper/Scraper";

export class Main {
    static async init(){
        const scp = new Scraper(globalConfig.DIPRESS_WEB);
        const site = await scp.getSite();
        const rows = scp.getRegisterFromTable(site);
        const programList = scp.parseArrayToObject(rows);

        process.exit(0);
    }
}