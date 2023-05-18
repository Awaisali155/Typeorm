"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const docter_1 = __importDefault(require("./models/docter"));
const patient_1 = __importDefault(require("./models/patient"));
exports.default = (0, typeorm_1.createConnection)({
    host: "localhost",
    type: "postgres",
    database: "hospital",
    port: 5432,
    username: "postgres",
    password: "root",
    entities: [docter_1.default, patient_1.default],
    synchronize: true,
    logging: true
});
