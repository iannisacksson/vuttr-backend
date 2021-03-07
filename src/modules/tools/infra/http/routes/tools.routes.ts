import { Router } from 'express';

import ToolsController from '../controllers/ToolsController';

import { create, query, id } from './validations/tools.validation';

const toolsRouter = Router();
const toolsController = new ToolsController();

toolsRouter.post('/', create, toolsController.create);

toolsRouter.get('/', query, toolsController.index);

toolsRouter.delete('/:id', id, toolsController.delete);

export default toolsRouter;
