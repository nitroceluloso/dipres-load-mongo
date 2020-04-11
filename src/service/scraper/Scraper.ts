
import axios from "axios";
import cheerio from "cheerio";
import { log } from "../../common/logger/logger";
import { HtmlParser } from "../html-parser/HtmlParser";

import { Program } from "../../model/program/Program";
import { Program as IProgram } from "../../model/program/types";
import { globalConfig } from "../../config";
import { RawProgram } from "../../model/raw-program/RawProgram";

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
        const registerPlains = rows.map((el) => new HtmlParser(el).getProgram());

        const cleanRegisters = registerPlains.filter((el: RawProgram) => el.year >= globalConfig.MINIMUM_YEAR);

        log("Evaluated elements obtained: ", cleanRegisters.length);

        return cleanRegisters.map((el: RawProgram) => new Program(el))
    }
}