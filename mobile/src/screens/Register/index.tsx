import React, { useRef, useCallback } from 'react';
import { TextInput } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { FormHandles } from '@unform/core';
import { Form } from '@unform/mobile';

import {
  Container,
  Input,
  LinkTextContainer,
  HelpText,
  LinkButtonText,
  LinkButton,
  ProfileImage,
} from './styles';

import Button from '../../components/Button';
import PickerInput from '../../components/PickerInput';

const Register: React.FC = () => {
  const { navigate } = useNavigation();

  const formRef = useRef<FormHandles>(null);
  const passwordRef = useRef<TextInput>(null);
  const emailRef = useRef<TextInput>(null);
  const phoneRef = useRef<TextInput>(null);
  const cpfRef = useRef<TextInput>(null);
  const genderRef = useRef<TextInput>(null);
  const addressRef = useRef<TextInput>(null);

  const handleSubmit = useCallback((data: any) => {
    console.log(data);
  }, []);

  const handleNavigate = useCallback(() => {
    navigate('Login');
  }, [navigate]);

  return (
    <Container>
      <ProfileImage
        source={{
          uri:
            'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png',
        }}
      />

      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input
          autoCorrect={false}
          autoCapitalize="words"
          icon="account"
          placeholder="Nome completo"
          name="name"
          returnKeyType="next"
          onSubmitEditing={() => passwordRef.current?.focus()}
        />

        <Input
          ref={passwordRef}
          icon="lock"
          placeholder="Senha"
          secureTextEntry
          name="password"
          returnKeyType="next"
          onSubmitEditing={() => emailRef.current?.focus()}
        />

        <Input
          ref={emailRef}
          icon="email"
          placeholder="E-mail"
          keyboardType="email-address"
          name="email"
          returnKeyType="next"
          onSubmitEditing={() => phoneRef.current?.focus()}
        />

        <Input
          ref={phoneRef}
          icon="cellphone-iphone"
          placeholder="Telefone"
          editable={false}
          name="phone_number"
          returnKeyType="next"
          onSubmitEditing={() => cpfRef.current?.focus()}
        />

        <Input
          ref={cpfRef}
          icon="account-badge-horizontal-outline"
          placeholder="CPF"
          name="cpf"
          returnKeyType="next"
          onSubmitEditing={() => genderRef.current?.focus()}
        />

        <PickerInput name="gender" />

        <Input
          ref={addressRef}
          icon="home"
          placeholder="Endereço"
          name="address"
          returnKeyType="send"
          onSubmitEditing={() => formRef.current?.submitForm()}
        />

        <Button onPress={() => formRef.current?.submitForm()}>Cadastrar</Button>
      </Form>

      <LinkTextContainer>
        <HelpText>Já tem uma conta?</HelpText>
        <LinkButton onPress={handleNavigate}>
          <LinkButtonText>Fazer login.</LinkButtonText>
        </LinkButton>
      </LinkTextContainer>
    </Container>
  );
};

export default Register;
