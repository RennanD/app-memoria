import { getMongoRepository } from 'typeorm';

import Preference from '../schemas/Preference';

import AppError from '../../../errors/AppError';

class CreatePreferenceServices {
  public async execute(category: string): Promise<Preference> {
    const preferenceRepository = getMongoRepository(Preference, 'mongo');

    const checkPreference = await preferenceRepository.findOne({
      where: {
        category,
      },
    });

    if (checkPreference) {
      throw new AppError('A categoria ja está cadastrada');
    }

    const preference = preferenceRepository.create({
      category,
    });

    await preferenceRepository.save(preference);

    return preference;
  }
}

export default CreatePreferenceServices;
