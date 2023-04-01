import express, { Application, Request, Response } from 'express';
import socketIo, { Server as SocketServer, Socket } from 'socket.io';
import http, { Server } from 'http';
import cors from "cors";
import { routes } from './routes';

const app: Application = express();
app.use(cors());
app.use(express.json());
const server: Server = http.createServer(app);
const io: SocketServer = new socketIo.Server(server,{
    cors: {
		origin: "*",
	}
});
app.use('/', routes);


io.on('connection', (socket: Socket) => {
    socket.on("addNewPlayer", (userName: string) => {
        console.log('new user', userName);
        io.emit('newScore', userName)
    });
    socket.on('victory', (userName: string) => {
        console.log('new victory', userName);
        io.emit('incrementScore', userName);
    });
});

const port = process.env.PORT || 8000;

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
