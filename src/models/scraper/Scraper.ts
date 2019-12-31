
import axios from "axios";
import * as cheerio from "cheerio";
import { log } from "../../common/logger";
import { HtmlParserFactory } from "../html-parser/HtmlParser";

export class Scraper {
    url: string;
    constructor(url: string) {
        this.url = url;
    }

    async getSite() {
        log("getting site: ", this.url)
        const page = await axios.get(this.url);
        log("got!")
        return cheerio.load(page.data);
    }

    getRegisterFromTable(web: CheerioStatic) {
        return web("#tabla_programas_evaluados tbody tr").toArray();
    }

    parseArrayToObject(rows: Array<any>) {
        log("elements obtained: ", rows.length)
        const factory = new HtmlParserFactory();
        return rows.map((el) => {
            return factory.parseHtml(el);
        });
    }
}