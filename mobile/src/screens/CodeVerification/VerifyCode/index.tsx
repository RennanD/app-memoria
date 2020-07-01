import React, { useState, useCallback } from 'react';

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

const VerifyCode: React.FC = () => {
  const [pressed, setPressed] = useState<boolean>(false);

  const pressButton = useCallback(() => {
    setPressed(true);

    setTimeout(() => {
      setPressed(false);
    }, 200);
  }, [setPressed]);

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
        />

        <Button>Confimar código</Button>
      </Content>
    </Container>
  );
};

export default VerifyCode;
