import {Router, Request, Response } from 'express';
import client from './RedisDB';

export const defaultRoute = Router();

defaultRoute.post('/', async (req: Request, res: Response) => {
    const { username } = req.body;
    try{
        await client.sendCommand(['ZADD', 'leaderboard', 'NX', '0', username]);
        res.send(`User registration for ${username} successfull`);
        return;
    }catch(error){
        console.log(error)
        res.send("error");
        return;
    }
});