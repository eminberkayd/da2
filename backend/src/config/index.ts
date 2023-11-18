import dotenv from "dotenv";
import path = require("path");
dotenv.config({ path: path.resolve(__dirname, "../.env") });

import { dbConfig } from "./db-config";


export const config = {
    db: dbConfig
}