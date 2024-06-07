import { Info } from "../models/info";
import { User } from "../models/user";

export interface getAllUserResponseDTO {
    results: User[];
    info: Info;
  }