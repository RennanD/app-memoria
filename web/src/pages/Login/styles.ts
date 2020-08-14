import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  background: #65c4b0;
  height: 100vh;
  width: 100%;
  flex-direction: column;
  justify-content: center;

  form {
    width: 90%;
    margin: 0 auto;
    max-width: 400px;
    display: flex;
    flex-direction: column;

    img {
      align-self: center;
      height: 150px;
      width: 150px;
      margin-bottom: 24px;
    }

    div {
      height: 46px;
      font-size: 22px;
      padding: 0 20px;
      border-radius: 20px;
      border: 1px solid #ddd;
      margin-bottom: 10px;
      display: flex;
      background: #fff;
      align-items: center;

      input {
        flex: 1;
        padding: 10px;
        font-size: 22px;
        border: 0;
      }
    }

    button {
      height: 46px;
      font-size: 24px;
      padding: 0 20px;
      border-radius: 20px;
      border: 0;
      color: #fff;
      background: #25a182;
      box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.05);
    }
  }
`;
