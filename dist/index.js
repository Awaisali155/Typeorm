"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dataBaseConnection_1 = __importDefault(require("./dataBaseConnection"));
// this expresRouter is used as app 
const router = (0, express_1.default)();
router.use(express_1.default.urlencoded({ extended: false }));
router.use(express_1.default.json());
const PORT = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 6060;
dataBaseConnection_1.default.then(() => {
    router.listen(PORT, () => {
        console.log({
            "server": `App is listing on ${PORT}`,
            "dataBase": "Database connected"
        });
    });
}).catch((error) => {
    console.log({
        "message": 'data base connection fail',
        "error": error
    });
});
