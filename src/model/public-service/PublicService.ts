
import { strToUnicode } from "../../helper/parser/string-to-unicode/stringToUnicode";

export class PublicService {
    name: string;
    code: number;

    constructor(rawName: string) {
        this.name = this.setName(rawName);
        this.code = this.setCode();
    }

    setName(rawName: string) {
        return rawName;
    }

    setCode() {
        return strToUnicode(this.name);
    }
}