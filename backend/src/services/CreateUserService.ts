import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';

import User from '../models/User';

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
  token: number;
  hasVerified: boolean;
}

class CreateUserService {
  public async execute({
    name,
    birthday,
    email,
    cpf,
    gender,
    zipcode,
    address,
    password,
  }: Request): Promise<void> {
    const userRepository = getRepository(User);

    const hash_password = await hash(password, 8);

    const user = userRepository.create({
      name,
      birthday,
      cpf,
      email,
      gender,
      address,
      zipcode,
      password: hash_password,
    });

    await userRepository.save(user);
  }
}

export default CreateUserService;
