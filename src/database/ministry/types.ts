
import { Document } from "mongoose";
import { Ministry } from "../../model/ministry/types";

export interface MinistryDocument extends Ministry, Document {}