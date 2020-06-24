import { getRepository } from 'typeorm';

import Contact from '../models/Contact';

interface Request {
  user_id: string;
}

class ListContactUserService {
  public async execute({ user_id }: Request): Promise<Contact[]> {
    const contactRepository = getRepository(Contact);

    const contacts = await contactRepository.find({
      where: { user_id },
    });

    return contacts;
  }
}

export default ListContactUserService;
