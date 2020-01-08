
import { Program } from "../../models/program/Program";
import { Ministry as IMinistry } from "../../models/ministry/types";
import { getUniqueElements } from "../../helpers/filters/getUniqueElements/getUniqueElements";
import { getNewDiffElements } from "../../helpers/filters/getNewDiffElements/getNewDiffElements";

import { MinistryDatabase } from "../../database/ministry/Ministry.database";
import { arrayToMap } from "../../helpers/parser/arrayToMap/arrayToMap";
import { log } from "../../common/logger/logger";

export class Ministries {

    static async updateMinistries(list: Array<Program>): Promise<Map<number, IMinistry>> {

        const ministriesCodes = getUniqueElements<Program, IMinistry>(list, "ministry", "name");
        const dbMinistriesArray = await MinistryDatabase.getAll();
        const dbMinistriesMap = arrayToMap<number, IMinistry>(dbMinistriesArray, "code");
        const newMinistries = getNewDiffElements(ministriesCodes, dbMinistriesMap);

        log("New ministries: ", newMinistries.length)

        if(newMinistries) await MinistryDatabase.save(newMinistries);
        return dbMinistriesMap;
    }

}