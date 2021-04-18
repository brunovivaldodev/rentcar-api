import Category from "@modules/cars/infra/typeorm/entities/Category";
import ICreateCategoryDTO from "@modules/cars/dtos/ICreateCategoryDTO";
import ICategoryRepository from "../ICategoriesRepository";

class CategoriesRepositoyFakes implements ICategoryRepository{

  categories : Category[] = []

  public async create({name,description}: ICreateCategoryDTO): Promise<Category> {
    const category = new Category

    Object.assign(category,{
      name,
      description
    })
    this.categories.push(category)
    return category
  }

  public async index(): Promise<Category[]> {
    const categories = this.categories;
    return categories
  }

  public async findByName(name: string): Promise<Category | undefined> {
    const category = this.categories.find((category) => category.name == name)
    return category
  }

}

export default CategoriesRepositoyFakes;
