import { getRepository } from 'typeorm';

import Contact from '../models/Contact';
import ImportantDate from '../models/ImportantDate';

import AppError from '../errors/AppError';

interface Request {
  contact_id: string;
}

class DeleteContactService {
  public async execute({ contact_id }: Request): Promise<void> {
    const contactRepository = getRepository(Contact);
    const dateRepository = getRepository(ImportantDate);

    const checkContact = await contactRepository.findOne({
      where: {
        id: contact_id,
      },
    });

    if (!checkContact) {
      throw new AppError('Contato não encontrado.');
    }

    const dates = await dateRepository.find({
      where: {
        contact_id,
      },
    });

    checkContact.deleted_at = new Date();

    const deletedesDates = dates.map(date => ({
      ...date,
      deleted_at: new Date(),
    }));

    await contactRepository.save(checkContact);
    await dateRepository.save(deletedesDates);
  }
}

export default DeleteContactService;
