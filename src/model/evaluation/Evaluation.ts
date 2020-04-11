
export class Evaluation {
    description: string;
    value: number;
    constructor(rawName: string) {
        this.description = this.setDescription(rawName);
        this.value = this.setValue();
    }

    private setDescription(rawName: string): string {
        const key = rawName.toLowerCase();
        const dictionary: IndexSignature<string> = {
            "desempeño medio": "medio",
            "mal desempeño": "mal",
            "desempeño bajo": "bajo",
            "buen desempeño": "buen"
        }
        return dictionary[key];
    }

    private setValue(): number {
        const dictionary: IndexSignature<number> = {
            "mal": 1,
            "bajo": 2,
            "medio": 3,
            "buen": 4
        }
        return dictionary[this.description];
    }
}