import React, { useEffect, useState } from 'react';

import Header from '../../components/Header';
import Input from '../../components/Input';

import api from '../../services/api';

import { Container, SideBar, RepositoriesList, CardItem } from './styles';

interface Props {
  toggletheme(): void;
}

interface Repository {
  id?: string;
  title: string;
  url: string;
  techs: string[];
  likes?: number;
}

const Dashboard: React.FC<Props> = ({ toggletheme }) => {
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [techs, setTechs] = useState('');

  useEffect(() => {
    async function loadRepositories(): Promise<void> {
      const response = await api.get<Repository[]>('/repositories');

      setRepositories(response.data);
    }

    loadRepositories();
  }, []);

  async function heandleAddRepository(): Promise<void> {
    const response = await api.post<Repository>('/repositories', {
      title,
      url,
      techs,
    });

    const repository = response.data;

    setRepositories([...repositories, repository]);
  }

  return (
    <>
      <Header toggletheme={toggletheme} titlePage="GoRepositories"/>
      <Container>
        <SideBar>
          <form onSubmit={heandleAddRepository}>
            <h1>Insira o Repositório:</h1>
            <Input
              type="text"
              placeholder="Title"
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
            <Input
              type="text"
              placeholder="Url"
              value={url}
              onChange={e => setUrl(e.target.value)}
            />
            <Input
              type="text"
              placeholder="Techs"
              value={techs}
              onChange={e => setTechs(e.target.value)}
            />
            <button type="submit">Adicionar</button>
          </form>
        </SideBar>

        <RepositoriesList>
          {repositories.map(repository => (
            <CardItem key={repository.id}>
              <section>
                <strong>Nome do repositório:</strong>
                <span>{repository.title}</span>
                <strong>Link do reposirório:</strong>
                <a href={repository.url}>{repository.url}</a>
              </section>

              <section>
                <strong>Likes:</strong>
                <span>{repository.likes}</span>
                <strong>Techs:</strong>
                <span>{repository.techs}</span>
              </section>
            </CardItem>
          ))}
        </RepositoriesList>
      </Container>
    </>
  );
};

export default Dashboard;
