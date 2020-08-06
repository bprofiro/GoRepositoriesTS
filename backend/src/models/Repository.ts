import { uuid } from 'uuidv4';

class Repository {
  id: string;

  title: string;

  url: string;

  techs: string[];

  likes: number;

  constructor({ title, url, techs, likes }: Omit<Repository, 'id'>) {
    this.id = uuid();
    this.title = title;
    this.url = url;
    this.techs = techs;
    this.likes = likes;
  }
}

export default Repository;
