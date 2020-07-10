import { getMongoRepository } from 'typeorm';

import Preference from '../schemas/Preference';
import AppError from '../../../errors/AppError';

interface Request {
  category: string;
  subcategories: string[];
}

class CreateSubcategoriesService {
  public async execute({
    category,
    subcategories,
  }: Request): Promise<Preference> {
    const preferenceRepository = getMongoRepository(Preference, 'mongo');

    const checkPreference = await preferenceRepository.findOne({
      where: { category },
    });

    console.log(checkPreference);

    if (!checkPreference) {
      throw new AppError('Preferência não encontrada');
    }

    const existentSubcategories = checkPreference.subcategoties;

    const finalSubcategories = subcategories
      .filter(subcategory => existentSubcategories.includes(subcategory))
      .filter((value, index, self) => self.indexOf(value) === index);

    checkPreference.subcategoties.push(...finalSubcategories);

    await preferenceRepository.save(checkPreference);

    return checkPreference;
  }
}

export default CreateSubcategoriesService;
