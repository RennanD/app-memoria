import React from 'react';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import {
  Container,
  Content,
  ActionButton,
  ActionButtonText,
  Header,
  Avatar,
} from './styles';

const Profile: React.FC = () => (
  <Container>
    <Header />

    <Content>
      <Avatar
        source={{
          uri:
            'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png',
        }}
      />

      <ActionButton>
        <ActionButtonText>Editar perfil</ActionButtonText>
        <MaterialCommunityIcons name="chevron-right" size={24} color="#FFF" />
      </ActionButton>

      <ActionButton>
        <ActionButtonText>Gostos e preferências</ActionButtonText>
        <MaterialCommunityIcons name="chevron-right" size={24} color="#FFF" />
      </ActionButton>

      <ActionButton>
        <ActionButtonText>Convide pessoas</ActionButtonText>
        <MaterialCommunityIcons name="chevron-right" size={24} color="#FFF" />
      </ActionButton>

      <ActionButton>
        <ActionButtonText>Minhas mensagens</ActionButtonText>
        <MaterialCommunityIcons name="chevron-right" size={24} color="#FFF" />
      </ActionButton>
    </Content>
  </Container>
);

export default Profile;
