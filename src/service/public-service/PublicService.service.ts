
import { Program } from "../../model/program/Program";
import { getUniqueElements } from "../../helper/filter/unique-element/uniqueElement";
import { arrayToMap } from "../../helper/parser/array-to-map/arrayToMap";
import { getNewDiffElements } from "../../helper/filter/diff-element/diffElement";

import { PublicServiceDatabase } from "../../database/public-service/PublicService.database";
import { PublicService } from "../../model/public-service/types";
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