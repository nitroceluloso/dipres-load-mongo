
import { Program } from "./Program";
import { RawProgram } from "../raw-program/types";

describe('Program Class', () => {
    test('Initialize', () => {
        const obj: RawProgram = {
            evaluation: "asd asd",
            name: "",
            ministry: "",
            publicService: "",
            year: 2
        };
        const prog = new Program(obj);
        expect(prog).toBeDefined();
    });
});