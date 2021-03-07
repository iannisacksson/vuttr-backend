import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';

import CreateToolService from '@modules/tools/services/CreateToolService';
import IndexToolService from '@modules/tools/services/IndexToolsService';

export default class ToolsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { title, link, description, tags } = request.body;

    const createTool = container.resolve(CreateToolService);

    const tool = await createTool.execute({
      title,
      link,
      description,
      tags,
    });

    return response.status(201).json(classToClass(tool));
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const indexTool = container.resolve(IndexToolService);

    const tools = await indexTool.execute();

    return response.json(tools);
  }
}
