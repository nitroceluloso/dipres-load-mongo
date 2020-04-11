
import { Ministry } from "../ministry/Ministry.model.";
import { Evaluation } from "../evaluation/Evaluation";
import { Evaluation as IEvaluation } from "../evaluation/types";
import { Ministry as IMinistry } from "../ministry/types";

import { PublicService } from "../public-service/PublicService";
import { PublicService as IPublicService } from "../public-service/types";
import { RawProgram } from "../raw-program/types";
import { strToUnicode } from "../../helper/parser/string-to-unicode/stringToUnicode";

export class Program {

    year: number;
    name: string;
    evaluation: IEvaluation;
    ministry: IMinistry;

    publicService: IPublicService;
    code: number;

    constructor(obj: RawProgram) {
        this.year = this.setYear(obj);
        this.name = this.setName(obj);
        this.ministry = this.setMinistry(obj);
        this.publicService = this.setPublicService(obj);
        this.evaluation = this.setEvaluation(obj);
        this.code = this.setCode();
    }

    private setYear(obj: RawProgram): number {
        return obj.year;
    }

    private setName(obj: RawProgram): string {
        return obj.name;
    }

    private setEvaluation(obj: RawProgram): IEvaluation  {
        return new Evaluation(obj.evaluation);
    }

    private setMinistry(obj: RawProgram): IMinistry {
        return new Ministry(obj.ministry);
    }

    private setPublicService(obj: RawProgram): IPublicService {
        return new PublicService(obj.publicService);
    }

    private setCode() {
        return strToUnicode(this.name);
    }

}