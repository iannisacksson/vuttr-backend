import { injectable, inject } from 'tsyringe';

import IToolsRepository from '../repositories/IToolsRepository';
import Tool from '../infra/typeorm/entities/Tool';

@injectable()
class IndexToolsService {
  constructor(
    @inject('ToolsRepository')
    private toolsRepository: IToolsRepository,
  ) {}

  public async execute(): Promise<Tool[]> {
    const tools = await this.toolsRepository.index();

    return tools;
  }
}

export default IndexToolsService;
