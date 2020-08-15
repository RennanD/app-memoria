import styled from 'styled-components';

export interface ContainerProps {
  isVisible: boolean;
}

export const Container = styled.div<ContainerProps>`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 5;
  background: rgba(0, 0, 0, 0.5);
  display: ${props => (props.isVisible ? 'flex' : 'none')};
  flex: 1;
  align-items: center;
  justify-content: center;

  main {
    height: 350px;
    width: 450px;
    background: #fff;
    border-radius: 10px;
    padding: 30px;
    text-align: center;
    /* display: flex;
    justify-content: center;
    flex-direction: column; */

    header {
      display: flex;
      color: #65c4b0;
      align-items: center;
      padding: 0 5px;

      h2 {
        font-weight: 600;
      }

      svg {
        margin-right: 10px;
      }
    }

    form {
      display: flex;
      flex: 1;
      justify-content: center;
      flex-direction: column;
      margin-top: 24px;
      padding: 0 20px;

      div {
        height: 46px;
        font-size: 22px;
        padding: 0 20px;
        border-radius: 20px;
        border: 1px solid #25a182;
        margin-bottom: 10px;
        display: flex;
        align-items: center;

        input {
          flex: 1;
          padding: 5px 10px;
          font-size: 16px;
          border: 0;
          color: #333;
        }
      }

      > button {
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

    button {
      height: 46px;
      font-size: 24px;
      padding: 0 20px;
      border-radius: 20px;
      border: 0;
      color: #c53030;
      background: none;
      margin-top: 10px;
    }
  }
`;
