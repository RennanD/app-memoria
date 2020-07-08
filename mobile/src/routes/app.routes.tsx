import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Profile from '../screens/Profile';
import Preferences from '../screens/Preferences';

const AppRoutes: React.FC = () => {
  const { Navigator, Screen } = createStackNavigator();

  return (
    <Navigator headerMode="none">
      <Screen name="Profile" component={Profile} />
      <Screen name="Preferences" component={Preferences} />
    </Navigator>
  );
};

export default AppRoutes;
