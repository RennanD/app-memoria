import React, { useRef, useCallback } from 'react';
import { TextInput } from 'react-native';

import { FormHandles } from '@unform/core';
import { Form } from '@unform/mobile';

import { Container, LogoImage, Input } from './styles';

import Button from '../../components/Button';

import { logo } from '../../assets';

const Login: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const passwordRef = useRef<TextInput>(null);

  const handleSubmit = useCallback((data: any) => {
    console.log(data);
  }, []);

  return (
    <Container>
      <LogoImage source={logo} />

      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input
          autoCorrect={false}
          autoCapitalize="none"
          keyboardType="email-address"
          icon="account"
          placeholder="E-mail"
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
    </Container>
  );
};

export default Login;
