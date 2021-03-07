import AppError from '@shared/errors/AppError';
import FakeToolsRepository from '../repositories/fakes/FakeToolsRepository';
import DeleteToolService from './DeleteToolService';

let fakeToolsRepository: FakeToolsRepository;
let deleteToolService: DeleteToolService;

describe('DeleteTool', () => {
  beforeEach(() => {
    fakeToolsRepository = new FakeToolsRepository();

    deleteToolService = new DeleteToolService(fakeToolsRepository);
  });

  it('Should be able to remove tool', async () => {
    const deleteTool = jest.spyOn(fakeToolsRepository, 'remove');

    const tool = await fakeToolsRepository.create({
      title: 'json-server',
      link: 'https://github.com/typicode/json-server',
      description:
        'Fake REST API based on a json schema. Useful for mocking and creating APIs for front-end devs to consume in coding challenges.',
      tags: ['api', 'json', 'schema', 'node', 'github', 'rest'],
    });

    await deleteToolService.execute(tool.id);

    expect(deleteTool).toHaveBeenCalledWith(tool);
  });

  it('Should not be able to delete a non existing tool', async () => {
    expect(
      deleteToolService.execute('non-existing-tool'),
    ).rejects.toBeInstanceOf(AppError);
  });
});
