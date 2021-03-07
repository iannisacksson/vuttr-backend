import { getRepository, Repository } from 'typeorm';

import IToolsRepository from '@modules/tools/repositories/IToolsRepository';
import ICreateToolDTO from '@modules/tools/dtos/ICreateToolDTO';

import Tool from '../entities/Tool';

class ToolsRepository implements IToolsRepository {
  private ormRepository: Repository<Tool>;

  constructor() {
    this.ormRepository = getRepository(Tool);
  }

  public async index(): Promise<Tool[]> {
    const tool = await this.ormRepository.find({
      order: { title: 'ASC' },
    });

    return tool;
  }

  public async findById(id: string): Promise<Tool | undefined> {
    const tool = await this.ormRepository.findOne({
      where: { id },
    });

    return tool;
  }

  public async create({
    title,
    description,
    link,
    tags,
  }: ICreateToolDTO): Promise<Tool> {
    const tool = this.ormRepository.create({
      title,
      description,
      link,
      tags,
    });

    await this.ormRepository.save(tool);

    return tool;
  }

  public async save(tool: Tool): Promise<Tool> {
    return this.ormRepository.save(tool);
  }

  public async remove(tool: Tool): Promise<void> {
    await this.ormRepository.remove(tool);
  }
}

export default ToolsRepository;
