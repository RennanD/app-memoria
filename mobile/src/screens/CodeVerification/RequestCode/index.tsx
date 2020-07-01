import React, { useState, useCallback } from 'react';
import { Alert } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import {
  Container,
  LogoImage,
  ContainerInput,
  Icon,
  Input,
  Prefix,
} from './styles';

import Button from '../../../components/Button';

import { logo } from '../../../assets';

import api from '../../../services/api';

const RequestCode: React.FC = () => {
  const { navigate } = useNavigation();

  const [phone_number, setPhoneNumber] = useState<string>('');

  const handleSubmit = useCallback(async () => {
    const formatted_phone = `+55${phone_number.replace(/\s/g, '')}`;

    try {
      const response = await api.post('/account', {
        phone_number: formatted_phone,
      });

      Alert.alert('Successo', response.data.content);

      navigate('VerifyCode');
    } catch ({ response }) {
      Alert.alert('Erro', 'Tente novamente');
    }
  }, [navigate, phone_number]);
  return (
    <Container>
      <LogoImage source={logo} />

      <ContainerInput>
        <Icon name="cellphone-iphone" size={30} color="#65C4B0" />
        <Prefix>+ 55</Prefix>
        <Input
          placeholder="(99) 9 9999-9999"
          keyboardType="phone-pad"
          placeholderTextColor="#ccc"
          value={phone_number}
          onChangeText={setPhoneNumber}
          type="custom"
          options={{
            mask: '99 9 9999 9999',
          }}
        />
      </ContainerInput>
      <Button onPress={handleSubmit}>Solicitar código</Button>
    </Container>
  );
};

export default RequestCode;
