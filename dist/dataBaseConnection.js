"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
exports.default = (0, typeorm_1.createConnection)({
    host: "localhost",
    type: "postgres",
    database: "school",
    port: 5432,
    username: "postgres",
    password: "root",
    synchronize: true,
    logging: true
});
