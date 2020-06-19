import { Router } from 'express';
import { getCustomRepository } from 'typeorm';

import UserPhoneRepository from '../repositories/AccountRepository';

interface QueryProps {
  phone_number: string;
  verification_code: string;
}

const phoneRouter = Router();

phoneRouter.get('/', async (request, response) => {
  const phone_number: string = request.query.phone_number as string;
  const verification_code: string = request.query.verification_code as string;

  const phoneRepository = getCustomRepository(UserPhoneRepository);

  await phoneRepository.verificateCodeNumber({
    phone_number,
    verification_code,
  });

  return response.json({ content: 'Seu telefone foi verificado com sucesso' });
});

phoneRouter.post('/', async (request, response) => {
  const { phone_number } = request.body;

  const phoneRepository = getCustomRepository(UserPhoneRepository);

  const message = await phoneRepository.requestVerificationCode(phone_number);

  return response.json(message);
});

export default phoneRouter;
