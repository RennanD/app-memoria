import { getRepository } from 'typeorm';

import Preferences from '../models/Preferences';
import User from '../models/User';

import AppError from '../../../errors/AppError';

interface RequestDTO {
  category: string;
  content: string;
}

interface Request {
  person_id: string;
  preferences: RequestDTO[];
}

class CreatePreferencesService {
  public async execute({
    person_id,
    preferences,
  }: Request): Promise<Preferences[]> {
    const preferencesRepository = getRepository(Preferences);
    const userRepository = getRepository(User);

    const checkUser = await userRepository.findOne({
      where: { id: person_id },
    });

    if (!checkUser) {
      throw new AppError('Usuário não encontrado');
    }

    const newPreferences = preferencesRepository.create(
      preferences.map(preference => ({
        person_id,
        category: preference.category.toLowerCase(),
        content: preference.content.toLowerCase(),
      })),
    );

    await preferencesRepository.save(newPreferences);

    return newPreferences;
  }
}

export default CreatePreferencesService;
