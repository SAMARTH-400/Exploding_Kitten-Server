"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const socket_io_1 = __importDefault(require("socket.io"));
const http_1 = __importDefault(require("http"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = require("./routes");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
const server = http_1.default.createServer(app);
const io = new socket_io_1.default.Server(server, {
    cors: {
        origin: "*",
    }
});
app.use('/', routes_1.routes);
io.on('connection', (socket) => {
    socket.on("addNewPlayer", (userName) => {
        console.log('new user', userName);
        io.emit('newScore', userName);
    });
    socket.on('victory', (userName) => {
        console.log('new victory', userName);
        io.emit('incrementScore', userName);
    });
});
const port = process.env.PORT || 8000;
server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
