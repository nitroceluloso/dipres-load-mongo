
export class RawProgram {
    year!: number;
    name!: string;
    evaluation!: string;
    ministry!: string;
    publicService!: string;

    public setYear(year: number) {
        this.year = year;
    }

    public setName(name: string) {
        this.name = name;
    }

    public setEvaluation(evaluation: string) {
        this.evaluation = evaluation.trim();
    }

    public setMinistry(ministry: string) {
        this.ministry = ministry;
    }

    public setPublicService(publicService: string) {
        this.publicService = publicService;
    }

}