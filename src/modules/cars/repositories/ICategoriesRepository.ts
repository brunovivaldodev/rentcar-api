import Category from '../model/Category'

import ICreateCategoryDTO from './dtos/ICreateCategoryDTO'

interface ICategoryRepository {
  create(data : ICreateCategoryDTO) : Category,
  index() : Category[],
  findByName(name:string) : Category | undefined;
}

export default ICategoryRepository;
