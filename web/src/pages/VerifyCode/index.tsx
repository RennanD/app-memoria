import React, { useCallback, useState } from 'react';

import { useHistory } from 'react-router-dom';
import { Container } from './styles';

import { logo } from '../../assets';
import { useVerification } from '../../hooks';

const VerifyCode: React.FC = () => {
  const [code, setCode] = useState('');

  const { verifyCode, phone_number, requestCode } = useVerification();
  const { push } = useHistory();

  const handleRequestNewCode = useCallback(
    async (e: React.FormEvent) => {
      try {
        await requestCode(phone_number);
      } catch (error) {
        alert(error.message);
      }
    },
    [phone_number, requestCode],
  );

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();

      try {
        await verifyCode(phone_number, code);
        push('/login');
      } catch (error) {
        alert(error.message);
      }
    },
    [code, phone_number, push, verifyCode],
  );

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <img src={logo} alt="" />
        <p>
          {`Enviamos um código de verificação para ${phone_number}. Digite o código recebido.`}
          <button type="button" onClick={handleRequestNewCode}>
            {' '}
            Não recebi um código.
          </button>
        </p>
        <div>
          <input
            placeholder="XXXX"
            value={code}
            onChange={e => setCode(e.target.value)}
          />
        </div>

        <button type="submit">Verificar código</button>
      </form>
    </Container>
  );
};

export default VerifyCode;
