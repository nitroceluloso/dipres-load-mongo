
import { Program } from "../../models/program/Program";
import { Program as IProgram } from "../../models/program/types";
import { Ministry } from "../../models/ministry/types";
import { PublicService } from "../../models/public-service/types";
import { arrayToMap } from "../../helpers/parser/arrayToMap/arrayToMap";
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