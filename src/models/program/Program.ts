
import { IProgram } from "./types";

export class Program {

    year: number;
    institution: string;
    evaluation: string;
    ministry: string;

    publicService: string;

    constructor(obj: IProgram) {
        this.year = this.parseYear(obj);
        this.institution = this.parseInstitution(obj);
        this.ministry = this.parseMinistry(obj);
        this.publicService = this.parsePublicService(obj);
        this.evaluation = this.parseEvaluation(obj);
    }

    private parseYear(obj: IProgram): number {
        return obj.year;
    }

    private parseInstitution(obj: IProgram): string {
        return obj.institution;
    }

    private parseEvaluation(obj: IProgram): string {
        return obj.evaluation.split(" ")[1].toLowerCase();
    }

    private parseMinistry(obj: IProgram): string {
        return this.cleanMinister(obj.ministry);
    }

    private cleanMinister(ministryRaw: string): string {
        const ministryKeysToDelete = new Set(["ministerio", "de", "del", "la"]);
        const ministryStringArray = ministryRaw.split(" ").filter((val: string, index: number) => {
            if(index <= 2) {
                return !ministryKeysToDelete.has(val.toLocaleLowerCase());
            } else {
                return true;
            }
        });

        return ministryStringArray.join(" ");
    }

    private parsePublicService(obj: IProgram): string {
        return obj.publicService;
    }

}