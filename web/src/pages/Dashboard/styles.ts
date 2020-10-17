import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const SideBar = styled.div`
  form {
    width: 352px;
    display: flex;
    flex-direction: column;
    background: ${props => props.theme.colors.secundary};
    margin: 55px 50px;
    padding: 30px 23px 24px;
    border-radius: 8px;

    h1 {
      font-weight: 500;
      font-size: 32px;
      margin-bottom: 60px;
    }

    input {
      background: #e8eaf6;
      border-radius: 10px;
      padding: 16px;
      width: 304px;
      height: 63px;

      border: none;

      font-size: 18px;
      color: #000;

      &::placeholder {
        font-size: 18px;
        color: #000;
      }

      & + input {
        margin-top: 8px;
      }
    }

    button {
      width: 304px;
      height: 63px;
      background: ${props => props.theme.colors.primary};
      margin-top: 60px;
      margin-bottom: 30px;
      border: none;
      border-radius: 10px;
      color: #fff;
    }
  }
`;

export const RepositoriesList = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CardItem = styled.div`
  width: 736px;
  height: 178px;
  border-radius: 8px;
  margin-top: 55px;
  margin-bottom: 30px;
  display: flex;
  align-items: space-between;
  background: ${props => props.theme.colors.secundary};

  & + div {
    margin-top: 0;
  }

  section {
    margin-left: 40px;
    display: flex;
    flex-direction: column;

    strong {
      margin-top: 20px;
    }

    span {
      margin-top: 8px;
      color: ${props => props.theme.colors.secundaryText};
    }

    a {
      margin-top: 8px;
      color: ${props => props.theme.colors.secundaryText};
      text-decoration: none;

      &:hover {
        color: ${shade(0.2, '#8B2B96')};
      }
    }
  }

  & + section {
    margin-left: 100px;
  }
`;
