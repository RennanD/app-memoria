import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Menu from '../screens/Menu';
import PreferencesRoutes from './preferences.routes';
import DateRoutes from './date.routes';
import MessagesRoutes from './messages.routes';
import Notifications from '../screens/Notifications';

import EnviteFriends from '../screens/EnviteFriends';
import ReminderDetail from '../screens/ReminderDetail';

const AppRoutes: React.FC = () => {
  const { Navigator, Screen } = createStackNavigator();

  return (
    <Navigator headerMode="none">
      <Screen name="Menu" component={Menu} />
      <Screen name="PreferencesRoutes" component={PreferencesRoutes} />
      <Screen name="DateRoutes" component={DateRoutes} />
      <Screen name="MessagesRoutes" component={MessagesRoutes} />
      <Screen name="EnviteFriends" component={EnviteFriends} />
      <Screen name="Notifications" component={Notifications} />
      <Screen name="ReminderDetail" component={ReminderDetail} />
    </Navigator>
  );
};

export default AppRoutes;
