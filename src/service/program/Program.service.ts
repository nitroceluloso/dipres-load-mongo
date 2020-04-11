
import { Program } from "../../model/program/Program";
import { Program as IProgram } from "../../model/program/types";
import { Ministry } from "../../model/ministry/types";
import { PublicService } from "../../model/public-service/types";
import { arrayToMap } from "../../helper/parser/array-to-map/arrayToMap";
import { ProgramDatabase } from "../../database/program/Program.database";
import { log } from "../../common/logger/logger";

export class Programs {

    static async updatePrograms(
        list: Array<Program>,
        ministries: Map<number, Ministry>,
        publicServices: Map<number, PublicService>
    ) {
        const newPrograms: Array<IProgram> = [];
        const gotPrograms = arrayToMap<Number, IProgram>(list, "code");
        const savedPrograms = await ProgramDatabase.getAll();
        const mapSavedProgram = arrayToMap<Number, IProgram>(savedPrograms, "code");

        gotPrograms.forEach((el, key) => {
            if(mapSavedProgram.has(key)) return;

            const ministry = ministries.get(el.ministry.code);
            const publicService = publicServices.get(el.publicService.code);

            if(ministry && publicService) {
                const newEl = {
                    ...el,
                    ministry,
                    publicService
                }
                newPrograms.push(newEl);
            }
        });

        if(newPrograms) await ProgramDatabase.save(newPrograms);

        log("New programs: ", newPrograms.length);
    }

}