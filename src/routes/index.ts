import express, { Request, Response } from 'express';
import { defaultRoute } from './Default';
import { scoreRoute } from './Scores';

export const routes = express.Router();

routes.use(defaultRoute);
routes.use(scoreRoute);