import React from 'react';

import { FiHeart, FiMessageSquare, FiLogIn } from 'react-icons/fi';

import { Container, Nav } from './styles';
import { logo } from '../../assets';

const SideBar: React.FC = () => {
  return (
    <Container>
      <header>
        <img src={logo} alt="App Memória" />
        <h2>App Memória</h2>
      </header>

      <ul>
        <li>
          <FiHeart size={24} color="#fff" />
          <Nav to="/dashboard">Prerências do sistema</Nav>
        </li>
        <li>
          <FiMessageSquare size={24} color="#fff" />
          <Nav to="/messages">Mensagens</Nav>
        </li>
      </ul>

      <footer>
        <button type="button">
          Sair
          <FiLogIn size={24} color="#fff" />
        </button>
      </footer>
    </Container>
  );
};

export default SideBar;
