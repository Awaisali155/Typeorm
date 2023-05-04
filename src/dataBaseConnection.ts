import { createConnection } from "typeorm";
export default createConnection({
    host: "localhost",
    type: "postgres",
    database: "school",
    port: 5432,
    username: "postgres",
    password: "root",
    synchronize: true,
    logging: true
})