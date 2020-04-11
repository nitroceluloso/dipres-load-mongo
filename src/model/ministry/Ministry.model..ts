
import { strToUnicode } from "../../helper/parser/string-to-unicode/stringToUnicode";
import { clearWordsFromName } from "./Ministry.model.helper";

export class Ministry {
    name: string;
    code: number;

    constructor(nameRaw: string) {
        this.name = this.setName(nameRaw);
        this.code = this.setCode();
    }

    private setName(nameRaw: string): string {
        return nameRaw.split(' ')
                    .filter(clearWordsFromName)
                    .join(' ');
    }

    private setCode(): number {
        return strToUnicode(this.name);
    }
}