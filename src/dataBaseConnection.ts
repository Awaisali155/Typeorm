import { createConnection } from "typeorm";
import Docter from "./models/docter";
import Patient from "./models/patient";
export default createConnection({
    host: "localhost",
    type: "postgres",
    database: "hospital",
    port: 5432,
    username: "postgres",
    password: "root",
    entities:[Docter,Patient],
    synchronize: true,
    logging: true
});
