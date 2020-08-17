import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  height: 100vh;

  main {
    width: 100%;
    max-width: 1000px;
    margin: 50px auto 0;
    overflow: auto;
    padding: 0 10px;

    header {
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 50px;

      h2 {
        color: #333;
        font-size: 32px;
      }

      button {
        background: #65c4b0;
        color: #fff;
        border: 0;
        border-radius: 8px;
        padding: 10px;
      }
    }

    .type-messages strong {
      color: #65c4b0;
      font-size: 18px;
      font-weight: 600;
      margin-bottom: 10px;
    }

    .messages {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-gap: 10px;
      margin: 10px 0;
      list-style: none;

      li img {
        height: 250px;
        width: 300px;
        border-radius: 4px;
      }
    }
  }
`;
