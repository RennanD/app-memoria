import React, { useRef, useCallback } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/mobile';

import { Container, LogoImage, Input } from './styles';

import Button from '../../components/Button';

import { logo } from '../../assets';

const Login: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback((data: any) => {
    console.log(data);
  }, []);

  return (
    <Container>
      <LogoImage source={logo} />

      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input icon="account" placeholder="E-mail" name="email" />
        <Input
          icon="lock"
          placeholder="Senha"
          secureTextEntry
          name="password"
        />

        <Button onPress={formRef.current?.submitForm}>Login</Button>
      </Form>
    </Container>
  );
};

export default Login;
