
import MinistrySchema from "./Ministry.schema";
import { Ministry } from "../../model/ministry/types";

export class MinistryDatabase {

    static async getAll(): Promise<Array<Ministry>> {
        return await MinistrySchema.find();
    }

    static async save(data: Array<Ministry>) {
        return await MinistrySchema.create(data);
    }

}