import Tool from '../infra/typeorm/entities/Tool';
import ICreateToolDTO from '../dtos/ICreateToolDTO';

export default interface IToolsRepository {
  index(): Promise<Tool[]>;
  findById(id: string): Promise<Tool | undefined>;
  create(data: ICreateToolDTO): Promise<Tool>;
  save(user: Tool): Promise<Tool>;
  remove(user: Tool): Promise<void>;
}
