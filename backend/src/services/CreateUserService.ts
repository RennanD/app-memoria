import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';

import User from '../models/User';
import UserPhone from '../models/UserPhone';

import AppError from '../errors/AppError';

interface Request {
  name: string;
  birthday: Date;
  phone: string;
  email: string;
  cpf: string;
  gender: 'masculino' | 'feminino';
  zipcode: string;
  address: string;
  password: string;
}

class CreateUserService {
  public async execute({
    name,
    birthday,
    phone,
    email,
    cpf,
    gender,
    zipcode,
    address,
    password,
  }: Request): Promise<UserPhone> {
    const userRepository = getRepository(User);
    const userPhoneRepository = getRepository(UserPhone);

    const hash_password = await hash(password, 8);

    const userExists = await userRepository.findOne({
      where: { email } || { cpf },
    });

    if (userExists) {
      throw new AppError('Usuário já possui uma conta.');
    }

    const phoneUser = await userPhoneRepository.findOne({
      where: {
        phone_number: phone,
      },
    });

    if (!phoneUser) {
      throw new AppError(
        'O número de telefone ainda não foi verificado, tente novamente.',
      );
    }

    if (!phoneUser.has_verified) {
      throw new AppError(
        'O número de telefone ainda não foi verificado, tente novamente.',
      );
    }

    if (phoneUser.user) {
      throw new AppError('Já existe uma conta com esse número de telefone.');
    }

    const user = userRepository.create({
      name,
      birthday,
      cpf,
      email,
      gender,
      address,
      zipcode,
      password: hash_password,
      role: 'user',
    });

    await userRepository.save(user);

    phoneUser.user = user;

    await userPhoneRepository.save(phoneUser);

    return phoneUser;
  }
}

export default CreateUserService;
