import { Router } from 'express';
import schoolRouter from './SchoolRouter';
// import transactionsRouter from './transactions.routes';

const routes = Router();
routes.use('/schools', schoolRouter);

export default routes;
