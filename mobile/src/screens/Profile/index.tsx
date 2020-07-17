import React, { useCallback } from 'react';

import { useNavigation } from '@react-navigation/native';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import {
  Container,
  Content,
  ActionButton,
  ActionButtonText,
  Header,
  Avatar,
  LogoutButton,
  LogoutButtonText,
} from './styles';

import { useAuth } from '../../hooks';

const Profile: React.FC = () => {
  const { navigate } = useNavigation();
  const { signOut } = useAuth();

  const handleNavigate = useCallback(
    (route: string) => {
      navigate(route);
    },
    [navigate],
  );

  const handleLogout = useCallback(async () => {
    await signOut();
  }, [signOut]);

  return (
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

        <ActionButton onPress={() => handleNavigate('PreferencesRoutes')}>
          <ActionButtonText>Gostos e preferências</ActionButtonText>
          <MaterialCommunityIcons name="chevron-right" size={24} color="#FFF" />
        </ActionButton>

        <ActionButton onPress={() => handleNavigate('DateRoutes')}>
          <ActionButtonText>Minhas datas</ActionButtonText>
          <MaterialCommunityIcons name="chevron-right" size={24} color="#FFF" />
        </ActionButton>

        <ActionButton>
          <ActionButtonText>Convide pessoas</ActionButtonText>
          <MaterialCommunityIcons name="chevron-right" size={24} color="#FFF" />
        </ActionButton>

        <ActionButton>
          <ActionButtonText onPress={() => handleNavigate('MessagesRoutes')}>
            Minhas mensagens
          </ActionButtonText>
          <MaterialCommunityIcons name="chevron-right" size={24} color="#FFF" />
        </ActionButton>

        <LogoutButton onPress={handleLogout}>
          <LogoutButtonText>Sair</LogoutButtonText>
        </LogoutButton>
      </Content>
    </Container>
  );
};

export default Profile;
