
import { IProgram, defaultIProgram } from "../program/index";

export class HtmlParserFactory {
    private site!: CheerioElement;
    private program!: IProgram;

    private setSite(site: CheerioElement){
        this.site = site;
        this.program = defaultIProgram;
    }

    private initialize(): void{
        this.getYear();
        this.getInstitution();
        this.getEvaluation();
        this.getMinister();
        this.publicSevice();
        this.getClasification();
    }

    private getYear() {
        const yearRaw = this.site.children[0].children[0].children[0].children[0].data;
        const year = yearRaw? parseInt(yearRaw) : 0;
        this.program = {
            ...this.program,
            year
        }
    }

    private getInstitution() {
        const institution = this.site.children[1].children[0].data || "";
        this.program = {
            ...this.program,
            institution
        }
    }

    private getEvaluation() {
        const evaluation = this.site.children[2].children[0].children[0].children[0].data || "";
        this.program = {
            ...this.program,
            evaluation
        }
    }

    private getMinister() {
        const minister = this.site.children[3].children[0].children[0].children[0].data || "";
        this.program = {
            ...this.program,
            minister
        }
    }

    private publicSevice() {
        const publicService = this.site.children[4].children[0].children[0].children[0].data || "";
        this.program = {
            ...this.program,
            publicService
        }
    }

    private getClasification() {
        const clasification = this.site.children[5].children[0].children[0].children[0].data || "";
        this.program = {
            ...this.program,
            clasification
        }
    }

    public parseHtml(site: CheerioElement) {
        this.setSite(site);
        this.initialize();
        return this.program;
    }
}