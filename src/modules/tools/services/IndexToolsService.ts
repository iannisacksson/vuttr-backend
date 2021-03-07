import { injectable, inject } from 'tsyringe';

import IToolsRepository from '../repositories/IToolsRepository';
import Tool from '../infra/typeorm/entities/Tool';

@injectable()
class IndexToolsService {
  constructor(
    @inject('ToolsRepository')
    private toolsRepository: IToolsRepository,
  ) {}

  public async execute(tag?: string): Promise<Tool[]> {
    const tools = await this.toolsRepository.index(tag);

    return tools;
  }
}

export default IndexToolsService;
