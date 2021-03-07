import FakeToolsRepository from '../repositories/fakes/FakeToolsRepository';
import CreateToolService from './CreateToolService';

let fakeToolsRepository: FakeToolsRepository;
let createTool: CreateToolService;

describe('CreateTool', () => {
  beforeEach(() => {
    fakeToolsRepository = new FakeToolsRepository();

    createTool = new CreateToolService(fakeToolsRepository);
  });

  it('Should be able to create a new tool', async () => {
    const tool = await createTool.execute({
      title: 'hotel',
      link: 'https://github.com/typicode/hotel',
      description:
        'Local app manager. Start apps within your browser, developer tool with local .localhost domain and https out of the box.',
      tags: [
        'node',
        'organizing',
        'webapps',
        'domain',
        'developer',
        'https',
        'proxy',
      ],
    });

    expect(tool).toHaveProperty('id');
    expect(tool.title).toBe('hotel');
    expect(tool.link).toBe('https://github.com/typicode/hotel');
  });
});
