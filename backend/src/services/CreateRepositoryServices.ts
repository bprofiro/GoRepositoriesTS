import RepositoriesRepository from '../repositories/RepositoriesRepository';
import Repository from '../models/Repository';

interface RepositoryRequest {
  title: string;
  url: string;
  techs: string[];
}

class CreateRepositoryService {
  private repositoriesRepository: RepositoriesRepository;

  constructor(repositoriesRepository: RepositoriesRepository) {
    this.repositoriesRepository = repositoriesRepository;
  }

  public execute({ title, url, techs }: RepositoryRequest): Repository {
    const repository = this.repositoriesRepository.create({
      title,
      url,
      techs,
    });

    return repository;
  }
}

export default CreateRepositoryService;
