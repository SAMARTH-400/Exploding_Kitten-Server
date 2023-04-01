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
exports.scoreRoute = void 0;
const express_1 = __importDefault(require("express"));
const RedisDB_1 = __importDefault(require("./RedisDB"));
exports.scoreRoute = express_1.default.Router();
exports.scoreRoute.get('/score', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const scores = yield RedisDB_1.default.sendCommand(['ZRANGE', 'leaderboard', '0', '-1', 'REV', 'WITHSCORES']);
        res.send(scores);
    }
    catch (error) {
        console.log(error);
        res.send(error);
    }
}));
exports.scoreRoute.put('/score', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username } = req.body;
    try {
        const newScore = yield RedisDB_1.default.sendCommand(['ZINCRBY', 'leaderboard', '1', username]);
        res.send(`User ${username} score is now ${newScore}`);
        return;
    }
    catch (error) {
        console.log(error);
        res.send(error);
        return;
    }
}));
