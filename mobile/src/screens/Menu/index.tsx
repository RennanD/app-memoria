/* eslint-disable max-len */
/* eslint-disable prettier/prettier */
import React, { useCallback, useMemo, useEffect, useState, useRef } from 'react';
import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';
import { FlatList, Alert } from 'react-native';
import socketio from 'socket.io-client';
import { useNavigation } from '@react-navigation/native';
import fetch from 'node-fetch';

import { useAuth } from '../../hooks';

import {
  Container,
  Content,
  CardItem,
  Header,
  CardItemTitle,
  Avatar,
  PageTitle,
} from './styles';
import boxShadowEffect from '../../styles/boxShadow';

import menuItems from '../../json/menuItems';

const Menu: React.FC = () => {
  const { navigate } = useNavigation();
  const { account } = useAuth();
  const notificationListener = useRef<any>(null);
  const responseListener = useRef<any>(null);

  const [expoPushToken, setExpoPushToken] = useState('');

  const socket = useMemo(() => socketio('http://192.168.25.9:3333', {
    query: {
      user_id: account.user.id,
    },
  }), [account.user.id]);

  useEffect(() => {
    async function registerTokenNotification():Promise<string | undefined> {
      if (Constants.isDevice) {
        const { status: existingStatus } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
        let finalStatus = existingStatus;
        if (existingStatus !== 'granted') {
          const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
          finalStatus = status;
        }
        if (finalStatus !== 'granted') {
          Alert.alert('Failed to get push token for push notification!');
          return;
        }
        const token = (await Notifications.getExpoPushTokenAsync()).data;
        setExpoPushToken(token);
      } else {
        Alert.alert('Must use physical device for Push Notifications');
      }
    }

    registerTokenNotification();

    // This listener is fired whenever a notification is received while the app is foregrounded
    notificationListener.current = Notifications
      .addNotificationReceivedListener(notification => {
        console.log(notification);
      });
    // This listener is fired whenever a user taps on or interacts with a notification (works when app is foregrounded, backgrounded, or killed)
    responseListener.current = Notifications
      .addNotificationResponseReceivedListener(response => {
        console.log(response);
      });
  });

  useEffect(() => {
    socket.on('notification', async (notification: any) => {
      console.log(notification);

      const message = {
        to: expoPushToken,
        sound: 'default',
        title: 'Lembrete',
        body: notification.notification_message,
        data: { data: 'goes here' },
      };

      await fetch('https://exp.host/--/api/v2/push/send', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Accept-encoding': 'gzip, deflate',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(message),
      });
    });
  }, [expoPushToken, socket]);

  const handleNavigate = useCallback(
    route => {
      if (!route) {
        return;
      }
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
              style={boxShadowEffect}
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
