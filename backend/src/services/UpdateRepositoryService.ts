import RepositoriesRepository from '../repositories/RepositoriesRepository';
import Repository from '../models/Repository';

interface RepositoryRequest {
  id: string;
  title: string;
  url: string;
  techs: string[];
}

class UpdateRepositoryservice {
  private repositoriesRepository: RepositoriesRepository;

  constructor(repositoriesRepository: RepositoriesRepository) {
    this.repositoriesRepository = repositoriesRepository;
  }

  public execute({ id, title, url, techs }: RepositoryRequest): Repository {
    const repository = this.repositoriesRepository.update({
      id,
      title,
      url,
      techs,
    });

    return repository;
  }
}

export default UpdateRepositoryservice;
