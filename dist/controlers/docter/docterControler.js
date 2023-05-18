"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const docter_1 = __importDefault(require("../../models/docter"));
exports.default = {
    addDocter: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        let docters = [];
        let docter = docter_1.default.create({ name: req.body.name, age: req.body.age, type: req.body.type });
        yield docter.save();
        docters.push(docter);
        res.send(docter);
    }),
    getDocter: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        let docter = yield docter_1.default.findOne({
            where: {
                id: parseInt(req.params.id)
            }
        });
        res.send(docter);
    }),
};
