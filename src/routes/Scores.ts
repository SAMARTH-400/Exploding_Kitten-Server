import express, { Request, Response } from 'express';
import client from './RedisDB';

export const scoreRoute = express.Router();

scoreRoute.get('/score', async (req: Request, res: Response) => {
    try{
        const scores = await client.sendCommand(['ZRANGE', 'leaderboard', '0', '-1', 'REV', 'WITHSCORES']);
        res.send(scores);
    }catch(error){
        console.log(error)
        res.send(error)
    }
});
scoreRoute.put('/score', async (req: Request, res: Response) => {
    const { username } = req.body;
    try{
        const newScore = await client.sendCommand(['ZINCRBY', 'leaderboard', '1', username]);
        res.send(`User ${username} score is now ${newScore}`);
        return;
    }catch(error){
        console.log(error)
        res.send(error);
        return;
    }
});
