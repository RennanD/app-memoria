import React, { useCallback, useState } from 'react';
import InputMask from 'react-input-mask';

import { useHistory } from 'react-router-dom';
import { Container } from './styles';

import { logo } from '../../assets';
import { useVerification } from '../../hooks';

const Request: React.FC = () => {
  const [phone, setPhone] = useState('');

  const { requestCode } = useVerification();
  const { push } = useHistory();

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();

      const formatted_phone = `+55${phone.replace(/\s/g, '')}`;

      try {
        await requestCode(formatted_phone);
        push('/verify-code');
      } catch (error) {
        alert(error.message);
      }
    },
    [phone, push, requestCode],
  );

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <img src={logo} alt="" />
        <div>
          <span>+ 55</span>
          <InputMask
            mask="99 9 9999 9999"
            placeholder="99 9 9999 9999"
            value={phone}
            onChange={e => setPhone(e.target.value)}
          />
        </div>

        <button type="submit">Solicitar código</button>
      </form>
    </Container>
  );
};

export default Request;
