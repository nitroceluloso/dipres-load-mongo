
import { Program } from "./Program";

describe('Program Class', () => {
    test('Initialize', () => {
        const obj = {
            evaluation: "desempeño medio",
            name: "",
            ministry: "",
            publicService: "",
            year: 2
        };
        const prog = new Program(obj);
        expect(prog).toBeDefined();
    });
});