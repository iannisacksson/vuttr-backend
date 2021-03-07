import { Router } from 'express';

import ToolsController from '../controllers/ToolsController';

import { create, query } from './validations/tools.validation';

const toolsRouter = Router();
const toolsController = new ToolsController();

toolsRouter.post('/', create, toolsController.create);

toolsRouter.get('/', query, toolsController.index);

export default toolsRouter;
