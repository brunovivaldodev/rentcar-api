import { getRepository, Repository } from 'typeorm'

import Category from '@modules/cars/entities/Category'

import ICategoryRepository from '../ICategoriesRepository'
import ICreateCategoryDTO from '../dtos/ICreateCategoryDTO'

class CategoryRepository implements ICategoryRepository {

  private repository: Repository<Category>
   constructor() {
    this.repository = getRepository(Category)
  }

  public async create({ name, description }: ICreateCategoryDTO): Promise<Category> {
    const category = this.repository.create({ name, description })
    await this.repository.save(category)
    return category
  }

  public async index(): Promise<Category[]> {
    const categories = await this.repository.find()
    return categories
  }

  public async findByName(name: string): Promise<Category | undefined> {
    const category = await this.repository.findOne({
      where : {name}
    })

    return category

  }

}

export default CategoryRepository
