"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const docterControler_1 = __importDefault(require("../../controlers/docter/docterControler"));
const docterRoutes = (0, express_1.default)();
docterRoutes.post("/", docterControler_1.default.addDocter);
docterRoutes.get("/:id?", docterControler_1.default.getDocter);
exports.default = docterRoutes;
