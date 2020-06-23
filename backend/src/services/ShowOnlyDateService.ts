import { getRepository } from 'typeorm';

import ImportantDate from '../models/ImportantDate';
import AppError from '../errors/AppError';

interface Request {
  date_id: string;
  user_id: string;
}

interface Response {
  id: string;
  date: Date;
  description: string;
  create_at: Date;
  updated_at: Date;
  contact: {
    id: string;
    name: string;
    phone_number: string;
    avatar?: string;
  };
}

class ShowOnlyDateService {
  public async execute({ user_id, date_id }: Request): Promise<Response> {
    const dateRepository = getRepository(ImportantDate);

    const date = await dateRepository.findOne({
      where: {
        id: date_id,
      },
    });

    if (!date) {
      throw new AppError('Resgistro não encontrado.');
    }

    if (date.user_id !== user_id) {
      throw new AppError('Você não pode acessar esse registro', 401);
    }

    return {
      id: date.id,
      date: date.date,
      create_at: date.created_at,
      description: date.description,
      updated_at: date.updated_at,
      contact: {
        id: date.contact.id,
        name: date.contact.name,
        phone_number: date.contact.phone_number,
        avatar: date.contact.avatar,
      },
    };
  }
}

export default ShowOnlyDateService;
