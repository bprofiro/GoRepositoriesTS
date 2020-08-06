import { Router } from 'express';

import RepositoriesRepository from '../repositories/RepositoriesRepository';
import CreateRepositoryService from '../services/CreateRepositoryServices';
import UpdateRepositoryService from '../services/UpdateRepositoryService';

const repositoryRouter = Router();

const repositoriesRepository = new RepositoriesRepository();

repositoryRouter.get('/', (request, response) => {
  const repositories = repositoriesRepository.all();

  return response.json(repositories);
});

repositoryRouter.post('/', (request, response) => {
  const { title, url, techs } = request.body;

  const createRepository = new CreateRepositoryService(repositoriesRepository);

  const repository = createRepository.execute({
    title,
    url,
    techs,
  });

  return response.json(repository);
});

repositoryRouter.put('/:id', (request, response) => {
  const { id } = request.params;
  const { title, url, techs } = request.body;

  const updateRepository = new UpdateRepositoryService(repositoriesRepository);

  const newUpdatedRepository = updateRepository.execute({
    id,
    title,
    url,
    techs,
  });

  return response.json(newUpdatedRepository);
});

repositoryRouter.delete('/:id', (request, response) => {
  const { id } = request.params;

  repositoriesRepository.delete({ id });

  return response.send();
});

repositoryRouter.post('/likes/:id', (request, response) => {
  const { id } = request.params;

  const repository = repositoriesRepository.likes({ id });

  return response.json(repository);
});

export default repositoryRouter;
