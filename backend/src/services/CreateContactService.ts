import { getRepository } from 'typeorm';

import Contact from '../models/Contact';

import AppError from '../errors/AppError';

interface Request {
  name: string;
  phone_number: string;
  avatar?: string;
}

class CreateContactService {
  public async execute({ phone_number, ...rest }: Request): Promise<Contact> {
    const contactRespository = getRepository(Contact);

    const contactExists = await contactRespository.findOne({
      where: { phone_number },
    });

    if (contactExists) {
      throw new AppError('Este contato já foi adicionado');
    }

    const contact = contactRespository.create({
      phone_number,
      ...rest,
    });

    await contactRespository.save(contact);

    return contact;
  }
}

export default CreateContactService;
