
import { IProgram, defaultIProgram } from "../program/types";

export class HtmlParser {
    private site: CheerioElement;
    private program: IProgram = defaultIProgram;

    constructor(site: CheerioElement){
        this.site = site;

        this.getYear();
        this.getInstitution();
        this.getEvaluation();
        this.getMinistry();
        this.publicSevice();
    }

    private getYear() {
        const yearRaw = this.getDataFromChild(0, 3, "data");
        const year = typeof yearRaw === "string"? parseInt(yearRaw, 10) : yearRaw;
        this.program = {
            ...this.program,
            year
        }
    }

    private getInstitution() {
        const institution = this.getDataFromChild(1, 1, "data");
        this.program = {
            ...this.program,
            institution
        }
    }

    private getMinistry() {
        const ministry = this.getDataFromChild(3, 3, "data");
        this.program = {
            ...this.program,
            ministry
        }
    }

    private publicSevice() {
        const publicService = this.getDataFromChild(4, 3, "data");
        this.program = {
            ...this.program,
            publicService
        }
    }

    private getEvaluation() {
        const evaluation = this.getDataFromChild(5, 3, "data");
        this.program = {
            ...this.program,
            evaluation
        }
    }

    private getDataFromChild(tdIndex: number, childrenDeep: number, key: string): string {
        const base = this.site.children[tdIndex];
        if(!base) throw new Error("Column not found.");

        return this.recursiveChildSearch(base, key, childrenDeep, 1);
    }

    private recursiveChildSearch(column: CheerioElement, key: string, totalChildrenDep: number, childrenDeep: number): string {
        const columnChild = column.children[0];
        if(totalChildrenDep !== childrenDeep && columnChild) {
            return this.recursiveChildSearch(columnChild, key, totalChildrenDep, childrenDeep +1);
        } else {
            return (columnChild as any)[key];
        };
    }

    public getObject() {
        return this.program;
    }
}