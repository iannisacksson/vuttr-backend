import FakeToolsRepository from '../repositories/fakes/FakeToolsRepository';
import IndexToolsService from './IndexToolsService';

let fakeToolsRepository: FakeToolsRepository;
let indexTools: IndexToolsService;

describe('IndexTools', () => {
  beforeEach(() => {
    fakeToolsRepository = new FakeToolsRepository();

    indexTools = new IndexToolsService(fakeToolsRepository);
  });

  it('Should be able to list all of the tools', async () => {
    const tools1 = await fakeToolsRepository.create({
      title: 'hotel',
      link: 'https://github.com/typicode/hotel',
      description:
        'Local app manager. Start apps within your browser, developer tool with local .localhost domain and https out of the box.',
      tags: ['node', 'organizing'],
    });

    const tools2 = await fakeToolsRepository.create({
      title: 'Notion',
      link: 'https://notion.so',
      description:
        'll in one tool to organize teams and ideas. Write, plan, collaborate, and get organized.',
      tags: [
        'organization',
        'planning',
        'collaboration',
        'writing',
        'calendar',
      ],
    });

    const tools3 = await fakeToolsRepository.create({
      title: 'json-server',
      link: 'https://github.com/typicode/json-server',
      description:
        'Fake REST API based on a json schema. Useful for mocking and creating APIs for front-end devs to consume in coding challenges.',
      tags: ['api', 'json', 'schema', 'node', 'github', 'rest'],
    });

    const fakeTools = [tools1, tools2, tools3];

    const tools = await indexTools.execute();

    expect(tools).toEqual(expect.arrayContaining(fakeTools));
  });
});
