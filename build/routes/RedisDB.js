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
Object.defineProperty(exports, "__esModule", { value: true });
const redis_1 = require("redis");
const client = (0, redis_1.createClient)({
    password: "7lu8nip2IbO2H0vXT7dw2AdpwQzgL7q7",
    socket: {
        host: "redis-16813.c212.ap-south-1-1.ec2.cloud.redislabs.com",
        port: 16813
    }
});
(() => __awaiter(void 0, void 0, void 0, function* () { yield client.connect(); }))();
exports.default = client;
