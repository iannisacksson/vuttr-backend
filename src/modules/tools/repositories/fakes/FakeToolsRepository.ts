import { v4 } from 'uuid';

import IToolsRepository from '@modules/tools/repositories/IToolsRepository';
import ICreateToolDTO from '@modules/tools/dtos/ICreateToolDTO';

import Tool from '../../infra/typeorm/entities/Tool';

class ToolsRepository implements IToolsRepository {
  private tools: Tool[] = [];

  public async index(tag?: string): Promise<Tool[]> {
    return !tag
      ? this.tools
      : this.tools.filter(tool => tool.tags.includes(tag));
  }

  public async findById(id: string): Promise<Tool | undefined> {
    const tool = this.tools.find(findTool => findTool.id === id);

    return tool;
  }

  public async create({
    title,
    description,
    link,
    tags,
  }: ICreateToolDTO): Promise<Tool> {
    const tool = new Tool();

    Object.assign(tool, { id: v4(), title, description, link, tags });

    this.tools.push(tool);

    return tool;
  }

  public async save(tool: Tool): Promise<Tool> {
    this.tools.push(tool);

    return tool;
  }

  public async remove(tool: Tool): Promise<void> {
    const toolIndex = this.tools.findIndex(findTool => findTool.id === tool.id);

    this.tools.splice(toolIndex, 1);
  }
}

export default ToolsRepository;
