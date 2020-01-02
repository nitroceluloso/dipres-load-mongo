
import { Program } from "./Program";
import { IProgram } from "./types";

describe('Program Class', () => {
    test('Initialize', () => {
        const obj: IProgram = {
            evaluation: "asd asd",
            institution: "",
            ministry: "",
            publicService: "",
            year: 2
        };
        const prog = new Program(obj);
        expect(prog).toBeDefined();
    });
});