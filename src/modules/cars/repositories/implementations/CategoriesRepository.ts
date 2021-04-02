import {getRepository, Repository} from 'typeorm'

import Category from '@modules/cars/entities/Category'

import ICategoryRepository from '../ICategoriesRepository'
import ICreateCategoryDTO from '../dtos/ICreateCategoryDTO'

class CategoryRepository implements ICategoryRepository {

  private repository : Repository<Category>

  private static INSTANCE: CategoryRepository

  public static getInstance(): CategoryRepository {
    if (!CategoryRepository.INSTANCE){
      CategoryRepository.INSTANCE = new CategoryRepository()
    }
    return CategoryRepository.INSTANCE
  }

  private constructor() {
    this.repository = getRepository(Category)
  }

  public create({ name, description }: ICreateCategoryDTO): Category {


    const category = this.repository.create({name,description})
      await this.repository.save(category)
    return category
  }

  public index(): Category[] {
    return this.categories
  }

  public findByName(name: string): Category | undefined {
    const category = this.categories.find((category) => category.name === name)

    return category

  }

}

export default CategoryRepository
