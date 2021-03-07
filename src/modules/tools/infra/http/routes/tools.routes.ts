import { Router } from 'express';

import ToolsController from '../controllers/ToolsController';

import create from './validations/tools.validation';

const toolsRouter = Router();
const toolsController = new ToolsController();

toolsRouter.post('/', create, toolsController.create);

export default toolsRouter;
