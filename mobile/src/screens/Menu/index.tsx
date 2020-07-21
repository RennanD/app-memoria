/* eslint-disable prettier/prettier */
import React, { useCallback } from 'react';
import { FlatList } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import {
  Container,
  Content,
  CardItem,
  Header,
  CardItemTitle,
  Avatar,
  PageTitle,
} from './styles';

import menuItems from '../../json/menuItems';

const Menu: React.FC = () => {
  const { navigate } = useNavigation();

  const handleNavigate = useCallback(
    route => {
      navigate(route);
    },
    [navigate],
  );

  return (
    <Container>
      <Header>
        <PageTitle>
          Bem vindo,
          {'\n'}
          Rennan Douglas!
        </PageTitle>
        <Avatar
          source={{
            uri:
              'https://lh3.googleusercontent.com/a-/AOh14GhxZSS12uOuowuxuIq-MttC2AHQP-Q1jX9TESgui-s=s96-c-rg-br100',
          }}
        />
      </Header>

      <Content>
        <FlatList
          data={menuItems}
          keyExtractor={item => item.title}
          numColumns={2}
          renderItem={({ item }) => (
            <CardItem
              onPress={() => handleNavigate(item.route)}
              style={{
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 1,
                },
                shadowOpacity: 0.22,
                shadowRadius: 2.22,

                elevation: 3,
              }}
            >
              {item.icon}
              <CardItemTitle>{item.title}</CardItemTitle>
            </CardItem>
          )}
        />
      </Content>
    </Container>
  );
};

export default Menu;
