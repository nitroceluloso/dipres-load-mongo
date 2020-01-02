
export interface IProgram {
    year: number;
    institution: string;
    evaluation: string;
    ministry: string;
    publicService: string;
}

export const defaultIProgram: IProgram = {
    year: 0,
    institution: "",
    evaluation: "",
    ministry: "",
    publicService: ""
}