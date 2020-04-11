
import { Document } from "mongoose";
import { PublicService } from "../../model/public-service/types";

export interface PublicServiceDocument extends PublicService, Document {}