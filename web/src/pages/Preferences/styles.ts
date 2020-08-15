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

    > ul {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 10px;

      > li {
        text-align: center;
        list-style: none;
        height: 300px;
        padding: 20px;
        background: #fff;
        box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.05);
        border-radius: 8px;
        max-width: 300px;

        div {
          height: 80%;

          strong {
            font-size: 18px;
            color: #333;
            font-weight: 700;
          }

          .subcategories {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-gap: 10px;
            overflow: auto;

            li {
              list-style: none;
              flex: 1;
              text-align: center;
              list-style: none;
              padding: 5px;
              background: #fff;
              box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.05);
              border-radius: 8px;
              max-width: 300px;
              span {
                font-size: 11px;
              }
            }
          }
        }

        footer {
          padding-top: 5px;
          height: 30%;
          border-top: 1px solid #ddd;
          margin-top: 10px;
          button {
            background: transparent;
            border: 0;
            color: #65c4b0;
          }
        }
      }
    }
  }
`;
