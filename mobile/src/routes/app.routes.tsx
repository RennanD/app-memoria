import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Menu from '../screens/Menu';
import PreferencesRoutes from './preferences.routes';
import DateRoutes from './date.routes';
import MessagesRoutes from './messages.routes';
import Notifications from '../screens/Notifications';

import EnviteFriends from '../screens/EnviteFriends';
import ReminderDetail from '../screens/ReminderDetail';
import Contacts from '../screens/Contacts';

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
      <Screen name="Contacts" component={Contacts} />
    </Navigator>
  );
};

export default AppRoutes;
