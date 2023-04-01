"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = __importDefault(require("express"));
const Default_1 = require("./Default");
const Scores_1 = require("./Scores");
exports.routes = express_1.default.Router();
exports.routes.use(Default_1.defaultRoute);
exports.routes.use(Scores_1.scoreRoute);
