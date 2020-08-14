import React, { useCallback, useState } from 'react';
import InputMask from 'react-input-mask';

import { useHistory } from 'react-router-dom';
import { Form } from '@unform/web';

import { FiUser, FiLock } from 'react-icons/fi';

import { Container } from './styles';

import { logo } from '../../assets';
import { useVerification, useAuth } from '../../hooks';
import Input from '../../components/Input';

const Login: React.FC = () => {
  const { signIn } = useAuth();

  const { push } = useHistory();

  const handleSubmit = useCallback(
    async (data: { email: string; password: string }) => {
      try {
        await signIn({
          email: data.email,
          password: data.password,
        });
      } catch (error) {
        alert(error.message);
      }
    },
    [],
  );

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <img src={logo} alt="" />
        <div>
          <FiUser size={24} color="#65c4b0" />
          <Input name="email" type="email" placeholder="E-mail" />
        </div>

        <div>
          <FiLock size={24} color="#65c4b0" />
          <Input name="password" placeholder="Senha" type="password" />
        </div>

        <button type="submit">Solicitar código</button>
      </Form>
    </Container>
  );
};

export default Login;
