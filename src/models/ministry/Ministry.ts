
import { strToUnicode } from "../../helpers/parser/strToUnicode/strToUnicode";

export class Ministry {
    name: string;
    code: number;
    constructor(nameRaw: string) {
        this.name = this.setName(nameRaw);
        this.code = this.setCode();
    }

    private setName(nameRaw: string): string {
        const ministryKeysToDelete = ["ministerio", "de", "del", "la", "las"];
        const ministryStringArray = nameRaw.split(" ").filter((val: string, index: number) => {
            if(index <= 2) {
                return !ministryKeysToDelete.includes(val.toLocaleLowerCase());
            } else {
                return true;
            }
        });

        return ministryStringArray.join(" ");
    }

    private setCode(): number {
        return strToUnicode(this.name);
    }
}