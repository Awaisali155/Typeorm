"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const docterRoutes_1 = __importDefault(require("./modules/routes/docterRoutes"));
const patientRoutes_1 = __importDefault(require("./modules/routes/patientRoutes"));
const mainRouter = (0, express_1.default)();
mainRouter.use("/docter", docterRoutes_1.default);
mainRouter.use("/patient", patientRoutes_1.default);
exports.default = mainRouter;
