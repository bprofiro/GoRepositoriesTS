import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  color: #666360;
  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
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
`;
