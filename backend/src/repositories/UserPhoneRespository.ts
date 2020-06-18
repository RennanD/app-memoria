/* eslint-disable global-require */
/* eslint-disable @typescript-eslint/no-var-requires */

import { EntityRepository, Repository } from 'typeorm';

import UserPhone from '../models/UserPhone';
import AppError from '../errors/AppError';

interface Request {
  verification_code: string;
  phone_number: string;
}

interface Message {
  content: string;
}

@EntityRepository(UserPhone)
class UserPhonesRepository extends Repository<UserPhone> {
  public async requestVerificationCode(phone_number: string): Promise<Message> {
    const verification_code = String(
      Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000,
    );

    const accountSid = 'AC7ae57582e89ca0b8a6b1f4de0a2439b6';
    const authToken = 'cacffeddcddb16da39a1f926891691e3';
    const client = require('twilio')(accountSid, authToken);

    const findUserPhone = await this.findOne({
      where: { phone_number },
    });

    if (findUserPhone?.has_verified) {
      throw new AppError('Seu telefone já foi verificado.');
    }

    client.messages.create({
      body: `Seu código de verificação é: ${verification_code}`,
      to: phone_number,
      from: '+12023185056',
    });

    if (findUserPhone) {
      findUserPhone.verification_code = verification_code;
      await this.save(findUserPhone);

      return {
        content: 'Código de verificação enviado com sucesso.',
      };
    }

    const newUserNumber = this.create({
      phone_number,
      verification_code,
    });

    await this.save(newUserNumber);

    return {
      content: 'Código de verificação enviado com sucesso.',
    };
  }

  public async verificateCodeNumber({
    verification_code,
    phone_number,
  }: Request): Promise<void> {
    const findUserPhone = await this.findOne({
      where: { phone_number },
    });

    if (!findUserPhone) {
      throw new AppError('Esse telefone ainda não foi cadastrado.', 401);
    }

    if (findUserPhone.verification_code !== verification_code) {
      throw new AppError('Código de verificação inválido!', 401);
    } else {
      findUserPhone.has_verified = true;
      await this.save(findUserPhone);
    }
  }
}

export default UserPhonesRepository;
