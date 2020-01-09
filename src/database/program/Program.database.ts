
import ProgramSchema from "./Program.schema";
import { Program } from "../../models/program/types";

export class ProgramDatabase {

    static async getAll(): Promise<Array<Program>> {
        return await ProgramSchema.find();
    }

    static async save(list: Array<Program>): Promise<Array<Program>> {
        return await ProgramSchema.create(list);
    }

}