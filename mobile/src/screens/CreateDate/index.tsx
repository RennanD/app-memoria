import React, { useCallback, useRef, useState } from 'react';
import { Alert } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';

import { Container, Header, PageTitle, FormContainer } from './styles';

import Input from '../../components/TextInput';
import MaskedInput from '../../components/MaskedInput';
import PickerInput from '../../components/PickerInput';
import DatePickerInput from '../../components/DatePickerInput/index.android';
import Button from '../../components/Button';

import api from '../../services/api';

interface Request {
  name: string;
  phone_number: string;
  relationship: string;
  date: Date;
  description: string;
}

const CreateDate: React.FC = () => {
  const pickerItems = [
    {
      label: 'Pai',
      value: 'pai',
    },
    {
      label: 'Mãe',
      value: 'mãe',
    },
    {
      label: 'Avó',
      value: 'avó',
    },
    {
      label: 'Avô',
      value: 'avô',
    },
    {
      label: 'Namorada',
      value: 'namorada',
    },
  ];

  const formRef = useRef<FormHandles>(null);

  const [loading, setLoading] = useState(false);

  const handleSubmit = useCallback(async (data: Request) => {
    setLoading(true);
    const { date, description, name, phone_number, relationship } = data;

    try {
      const contactResponse = await api.post('/contacts', {
        name,
        phone_number,
        relationship,
      });

      const { id } = contactResponse.data;

      await api.post('/dates', {
        contact_id: id,
        date,
        description,
      });

      Alert.alert('Sucesso', 'Evento cadastrado com sucesso');
      setLoading(false);
    } catch (error) {
      console.log(error);
      Alert.alert('Erro', 'Não foi possível criar o evento.');
      setLoading(false);
    }
  }, []);

  return (
    <Container>
      <Header>
        <MaterialCommunityIcons name="calendar-month" size={48} color="#fff" />
        <PageTitle>Datas importantes</PageTitle>
      </Header>

      <FormContainer>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input
            name="name"
            icon="account"
            placeholder="Nome do contato"
            borderColor="#ddd"
          />
          <MaskedInput
            name="phone_number"
            icon="cellphone-iphone"
            borderColor="#ddd"
            placeholder="Telefone"
            type="cel-phone"
          />
          <PickerInput
            borderColor="#ddd"
            name="relationship"
            placeholder="Selecinone um relacionamento"
            items={pickerItems}
            icon="account-heart-outline"
          />

          <DatePickerInput
            name="date"
            borderColor="#ddd"
            placeholder="Data do evento"
          />

          <Input
            name="description"
            icon="card-text-outline"
            placeholder="Descrição"
            borderColor="#ddd"
          />

          <Button
            loading={loading}
            onPress={() => formRef.current?.submitForm()}
          >
            Adicionar
          </Button>
        </Form>
      </FormContainer>
    </Container>
  );
};

export default CreateDate;
