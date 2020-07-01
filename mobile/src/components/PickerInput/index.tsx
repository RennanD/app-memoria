import React, { useState, useRef, useEffect } from 'react';
import { Picker } from '@react-native-community/picker';

import { useField } from '@unform/core';

import { Container, Icon } from './styles';

interface PickerProps {
  name: string;
}

interface InputValueReference {
  value: string;
}

const PickerInput: React.FC<PickerProps> = ({ name }) => {
  const { fieldName, registerField, defaultValue = '' } = useField(name);
  const inputValueRef = useRef<InputValueReference>({ value: defaultValue });

  const [selected, setSelected] = useState<React.ReactText>('');

  const inputElementRef = useRef<any>(null);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputValueRef.current,
      path: 'value',
    });
  });

  return (
    <Container>
      <Icon name="gender-male-female" size={30} color="#65C4B0" />
      <Picker
        ref={inputElementRef}
        selectedValue={selected}
        style={{ flex: 1 }}
        onValueChange={itemValue => {
          inputValueRef.current.value = String(itemValue);
          setSelected(itemValue);
        }}
      >
        <Picker.Item label="Selecione um gênero" value="" />
        <Picker.Item label="Masculino" value="masculino" />
        <Picker.Item label="Feminino" value="feminino" />
        <Picker.Item label="Outro" value="outro" />
      </Picker>
    </Container>
  );
};

export default PickerInput;
