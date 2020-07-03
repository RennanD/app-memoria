import React, { useState, useCallback } from 'react';

import { useNavigation } from '@react-navigation/native';

import {
  Container,
  IconImage,
  Content,
  InfoText,
  ReinviteButtonText,
  CodeInput,
} from './styles';

import { cellphone } from '../../../assets';

import Button from '../../../components/Button';

import { useVerification } from '../../../hooks';

const VerifyCode: React.FC = () => {
  const [pressed, setPressed] = useState<boolean>(false);
  const [code, setCode] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const { verifyCode, phone_number } = useVerification();
  const { navigate } = useNavigation();

  const pressButton = useCallback(() => {
    setPressed(true);

    setTimeout(() => {
      setPressed(false);
    }, 200);
  }, [setPressed]);

  const handleVerifyCode = useCallback(async () => {
    setLoading(true);

    console.log(code);

    try {
      await verifyCode(phone_number, code);
      setLoading(false);
      navigate('Login');
    } catch (error) {
      setLoading(false);
    }
  }, [code, navigate, phone_number, verifyCode]);

  return (
    <Container>
      <IconImage source={cellphone} />
      <Content>
        <InfoText>
          Enviamos um código de verificação para +55 86 0000 0000. Digite o
          código recebeido.
          <ReinviteButtonText pressed={pressed} onPress={pressButton}>
            {' '}
            Não recebi o código.
          </ReinviteButtonText>
        </InfoText>

        <CodeInput
          maxLength={4}
          keyboardType="number-pad"
          placeholder="XXXX"
          placeholderTextColor="#eee"
          value={code}
          onChangeText={setCode}
        />

        <Button loading={loading} onPress={handleVerifyCode}>
          Confimar código
        </Button>
      </Content>
    </Container>
  );
};

export default VerifyCode;
