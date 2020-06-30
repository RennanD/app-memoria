import React, { useState, useCallback } from 'react';

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

const RequestCode: React.FC = () => {
  const [phone_number, setPhoneNumber] = useState<string>('');

  const handleSubmit = useCallback(() => {
    console.log('oi');
  }, []);
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
        />
      </ContainerInput>
      <Button onPress={handleSubmit}>Solicitar código</Button>
    </Container>
  );
};

export default RequestCode;
