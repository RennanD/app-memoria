import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Profile from '../screens/Profile';
import PreferencesRoutes from './preferences.routes';

const AppRoutes: React.FC = () => {
  const { Navigator, Screen } = createStackNavigator();

  return (
    <Navigator headerMode="none">
      <Screen name="Profile" component={Profile} />
      <Screen name="PreferencesRoutes" component={PreferencesRoutes} />
    </Navigator>
  );
};

export default AppRoutes;
