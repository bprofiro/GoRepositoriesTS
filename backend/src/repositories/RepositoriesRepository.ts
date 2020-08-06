import Repository from '../models/Repository';

interface CreateRepository {
  title: string;
  url: string;
  techs: string[];
}

interface UpdateRepository {
  id: string;
  title: string;
  url: string;
  techs: string[];
}

interface RepositoryID {
  id: string;
}

class RepositoriesRepository {
  private repositories: Repository[];

  constructor() {
    this.repositories = [];
  }

  public all(): Repository[] {
    return this.repositories;
  }

  public create({ title, url, techs }: CreateRepository): Repository {
    const repository = new Repository({ title, url, techs, likes: 0 });

    this.repositories.push(repository);

    return repository;
  }

  public update({ id, title, url, techs }: UpdateRepository): Repository {
    const repositoryIndex = this.repositories.findIndex(
      repository => repository.id === id,
    );

    const updatedRepository = {
      id,
      title,
      url,
      techs,
      likes: this.repositories[repositoryIndex].likes,
    };

    this.repositories[repositoryIndex] = updatedRepository;

    return updatedRepository;
  }

  public delete({ id }: RepositoryID): void {
    const repositoryIndex = this.repositories.findIndex(
      repository => repository.id === id,
    );

    if (repositoryIndex < 0) {
      throw new Error('Repository not found');
    }

    this.repositories.splice(repositoryIndex, 1);
  }

  public likes({ id }: RepositoryID): Repository {
    const repositoryIndex = this.repositories.findIndex(
      repository => repository.id === id,
    );

    const repository = {
      id: this.repositories[repositoryIndex].id,
      title: this.repositories[repositoryIndex].title,
      url: this.repositories[repositoryIndex].url,
      techs: this.repositories[repositoryIndex].techs,
      likes: this.repositories[repositoryIndex].likes += 1,
    };

    return repository;
  }
}

export default RepositoriesRepository;
