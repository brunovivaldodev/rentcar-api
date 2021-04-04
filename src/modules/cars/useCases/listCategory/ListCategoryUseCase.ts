import Category from "@modules/cars/entities/Category";
import CategoryRepository from "@modules/cars/repositories/implementations/CategoriesRepository";
import { injectable, inject } from 'tsyringe'
@injectable()
class ListCategoryUseCase {
  constructor(
    @inject("CategoryRepository")
    private categoryRepository: CategoryRepository
  ) { }
  public async execute(): Promise<Category[]> {
    const category = await this.categoryRepository.index()
    return category
  }
}

export default ListCategoryUseCase
