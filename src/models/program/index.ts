
export interface IProgram {
    year: number;
    institution: string;
    evaluation: string;
    minister: string;
    publicService: string;
    clasification: string;
}

export const defaultIProgram: IProgram = {
    year: 0,
    institution: "",
    evaluation: "",
    minister: "",
    publicService: "",
    clasification: ""
}