import React from 'react';
import { View, Button } from 'react-native';

import { useAuth } from '../../hooks';

// import { Container } from './styles';

const Profile: React.FC = () => {
  const { signOut } = useAuth();

  return (
    <View>
      <Button title="Sair" onPress={signOut} />
    </View>
  );
};

export default Profile;
