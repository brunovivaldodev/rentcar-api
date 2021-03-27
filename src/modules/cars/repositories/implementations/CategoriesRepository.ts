import Category from '@modules/cars/model/Category'

import ICategoryRepository from '../ICategoriesRepository'
import ICreateCategoryDTO from '../dtos/ICreateCategoryDTO'

class CategoryRepository implements ICategoryRepository {

  private categories: Category[]

  private static INSTANCE: CategoryRepository

  public static getInstance(): CategoryRepository {
    if (!CategoryRepository.INSTANCE){
      CategoryRepository.INSTANCE = new CategoryRepository()
    }
    return CategoryRepository.INSTANCE
  }

  private constructor() {
    this.categories = []
  }

  public create({ name, description }: ICreateCategoryDTO): Category {


    let category = new Category()

    Object.assign(category, {
      name,
      description,
      created_at: new Date()
    })

    this.categories.push(category)
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
