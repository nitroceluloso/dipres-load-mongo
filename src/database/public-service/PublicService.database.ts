
import PublicServiceSchema from "./PublicService.schema";
import { PublicService } from "../../models/public-service/types";

export class PublicServiceDatabase {

    static async getAll(): Promise<Array<PublicService>> {
        return await PublicServiceSchema.find();
    }

    static async save(data: Array<PublicService>) {
        return await PublicServiceSchema.create(data);
    }

}