
import { Document } from "mongoose";
import { Program } from "../../model/program/types";

export interface ProgramDocument extends Program, Document {}