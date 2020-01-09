
import { Program } from "../../models/program/Program";
import { getUniqueElements } from "../../helpers/filters/getUniqueElements/getUniqueElements";
import { arrayToMap } from "../../helpers/parser/arrayToMap/arrayToMap";
import { getNewDiffElements } from "../../helpers/filters/getNewDiffElements/getNewDiffElements";

import { PublicServiceDatabase } from "../../database/public-service/PublicService.database";
import { PublicService } from "../../models/public-service/types";
import { log } from "../../common/logger/logger";


export class PublicServices {

    static async updatePublicServices(list: Array<Program>): Promise<Map<number, PublicService>> {

        const publicServicesCodes = getUniqueElements<Program, PublicService>(list, "publicService", "name");
        const dbMinistriesArray = await PublicServiceDatabase.getAll();
        const dbMinistriesMap = arrayToMap<number, PublicService>(dbMinistriesArray, "code");
        const newPublicServices = getNewDiffElements(publicServicesCodes, dbMinistriesMap);

        log("New public services: ", newPublicServices.length)

        if(newPublicServices) await PublicServiceDatabase.save(newPublicServices);
        return dbMinistriesMap;
    }

}