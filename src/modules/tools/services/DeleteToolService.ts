import AppError from '@shared/errors/AppError';
import { injectable, inject } from 'tsyringe';

import IToolsRepository from '../repositories/IToolsRepository';

@injectable()
class DeleteToolService {
  constructor(
    @inject('ToolsRepository')
    private toolsRepository: IToolsRepository,
  ) {}

  public async execute(id: string): Promise<void> {
    const checkToolExists = await this.toolsRepository.findById(id);

    if (!checkToolExists) {
      throw new AppError('Ferramenta não foi encontrada no sistema!', 404);
    }

    await this.toolsRepository.remove(checkToolExists);
  }
}

export default DeleteToolService;
