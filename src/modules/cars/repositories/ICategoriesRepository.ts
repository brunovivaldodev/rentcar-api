import Category from '../entities/Category'

import ICreateCategoryDTO from './dtos/ICreateCategoryDTO'

interface ICategoryRepository {
  create(data : ICreateCategoryDTO) : Promise<Category>,
  index() : Promise<Category[]>,
  findByName(name:string) : Promise<Category | undefined>;
}

export default ICategoryRepository;
