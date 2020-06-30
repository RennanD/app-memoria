import React, { useRef, useCallback } from 'react';
import { TextInput } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { FormHandles } from '@unform/core';
import { Form } from '@unform/mobile';

import {
  Container,
  LogoImage,
  Input,
  LinkTextContainer,
  HelpText,
  LinkButton,
  LinkButtonText,
} from './styles';

import Button from '../../components/Button';

import { logo } from '../../assets';

const Login: React.FC = () => {
  const { navigate } = useNavigation();
  const formRef = useRef<FormHandles>(null);
  const passwordRef = useRef<TextInput>(null);

  const handleSubmit = useCallback((data: any) => {
    console.log(data);
  }, []);

  const handleNavigate = useCallback(() => {
    navigate('Register');
  }, [navigate]);

  return (
    <Container>
      <LogoImage source={logo} />

      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input
          autoCorrect={false}
          autoCapitalize="none"
          keyboardType="email-address"
          icon="account"
          placeholder="Nome completo"
          name="email"
          returnKeyType="next"
          onSubmitEditing={() => passwordRef.current?.focus()}
        />

        <Input
          ref={passwordRef}
          icon="lock"
          placeholder="Senha"
          secureTextEntry
          name="password"
          returnKeyType="send"
          onSubmitEditing={() => formRef.current?.submitForm()}
        />

        <Button onPress={() => formRef.current?.submitForm()}>Login</Button>
      </Form>

      <LinkTextContainer>
        <HelpText>Não tem uma conta?</HelpText>
        <LinkButton onPress={handleNavigate}>
          <LinkButtonText>Inscreva-se.</LinkButtonText>
        </LinkButton>
      </LinkTextContainer>
    </Container>
  );
};

export default Login;
