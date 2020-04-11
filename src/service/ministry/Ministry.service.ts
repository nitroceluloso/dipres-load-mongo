
import { Program } from "../../model/program/Program";
import { Ministry } from "../../model/ministry/types";
import { getUniqueElements } from "../../helper/filter/unique-element/uniqueElement";
import { getNewDiffElements } from "../../helper/filter/diff-element/diffElement";

import { MinistryDatabase } from "../../database/ministry/Ministry.database";
import { arrayToMap } from "../../helper/parser/array-to-map/arrayToMap";
import { log } from "../../common/logger/logger";

export class Ministries {

    static async updateMinistries(list: Array<Program>): Promise<Map<number, Ministry>> {

        const ministriesCodes = getUniqueElements<Program, Ministry>(list, "ministry", "name");
        const dbMinistriesArray = await MinistryDatabase.getAll();
        const dbMinistriesMap = arrayToMap<number, Ministry>(dbMinistriesArray, "code");
        const newMinistries = getNewDiffElements(ministriesCodes, dbMinistriesMap);

        log("New ministries: ", newMinistries.length)

        if(newMinistries) await MinistryDatabase.save(newMinistries);
        return dbMinistriesMap;
    }

}