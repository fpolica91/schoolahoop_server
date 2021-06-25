import { Router, Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';

import SchoolRepository from '../repositories/PublicRepository';

const schoolRouter = Router();

schoolRouter.get('/', async (request: Request, response: Response) => {
  try {
    console.log('here');
    const schoolService = getCustomRepository(SchoolRepository);
    const schools = await schoolService.getAllSchools();
    return response.json(schools);
  } catch (error) {
    console.log(error.message);
    return response.json(error.message);
  }
});

export default schoolRouter;
