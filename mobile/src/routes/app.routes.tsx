import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Profile from '../screens/Profile';
import PreferencesRoutes from './preferences.routes';
import DateRoutes from './date.routes';
import MessagesRoutes from './messages.routes';

import EnviteFriends from '../screens/EnviteFriends';

const AppRoutes: React.FC = () => {
  const { Navigator, Screen } = createStackNavigator();

  return (
    <Navigator headerMode="none">
      <Screen name="Profile" component={Profile} />
      <Screen name="PreferencesRoutes" component={PreferencesRoutes} />
      <Screen name="DateRoutes" component={DateRoutes} />
      <Screen name="MessagesRoutes" component={MessagesRoutes} />
      <Screen name="EnviteFriends" component={EnviteFriends} />
    </Navigator>
  );
};

export default AppRoutes;
