import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  background: #65c4b0;
  height: 100vh;
  width: 300px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.05);
  padding: 30px;

  header {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 30px;
    padding-bottom: 20px;

    border-bottom: 1px solid rgba(255, 255, 255, 0.2);

    img {
      height: 50px;
      width: 50px;
    }

    h2 {
      font-size: 24px;
      color: #fff;
      font-weight: 800;
    }
  }

  ul {
    flex: 1;
    height: 78%;
    list-style: none;

    li {
      margin-bottom: 20px;
      display: flex;
      align-items: center;
    }
  }

  button {
    width: 100%;
    height: 46px;
    border: 0;
    background: #c53030;
    border-radius: 20px;
    color: #fff;
    font-size: 22px;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.05);

    svg {
      margin-left: 10px;
    }
  }
`;

export const Nav = styled(NavLink).attrs({
  activeStyle: {
    borderBottomColor: '#ddd',
  },
})`
  color: #fff;
  text-decoration: none;
  font-size: 22px;
  display: flex;
  padding: 10px;
  border-bottom: 2px solid #65c4b0;

  &:hover {
    opacity: 0.8;
  }
`;
