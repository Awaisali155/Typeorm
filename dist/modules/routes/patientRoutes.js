"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const patientControler_1 = __importDefault(require("../../controlers/patient/patientControler"));
const patientRoute = (0, express_1.default)();
patientRoute.use("/", patientControler_1.default.patient);
exports.default = patientRoute;
