
import axios from "axios";
import cheerio from "cheerio";
import { log } from "../../common/logger/logger";
import { HtmlParser } from "../html-parser/HtmlParser";

import { Program } from "../../models/program/Program";
import { Program as IProgram } from "../../models/program/types";
import { globalConfig } from "../../config";
import { RawProgram } from "../../models/raw-program/RawProgram";

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

    parseToProgram(rows: Array<any>): Array<Program> {
        log("Total elements obtained: ", rows.length);
        const registerPlains = rows.map((el) => {
            return new HtmlParser(el).getObject();
        });

        const cleanRegisters = registerPlains.filter((el: RawProgram) => {
            return el.year >= globalConfig.MINIMUM_YEAR;
        });

        log("Evaluated elements obtained: ", cleanRegisters.length);

        return cleanRegisters.map((el: RawProgram) => {
            return new Program(el);
        })
    }
}