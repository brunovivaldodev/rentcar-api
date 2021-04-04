import Category from "@modules/cars/entities/Category";
import ICategoryRepository from "@modules/cars/repositories/ICategoriesRepository";
import { inject, injectable } from 'tsyringe'

interface IRequest {
  name: string,
  description: string
}
@injectable()
class CreateCategoryUseCase {
  constructor(
    @inject("CategoryRepository")
    private categoryRepository: ICategoryRepository
  ) { }

  public async execute({ name, description }: IRequest): Promise<Category> {

    const categoryAlreadyExists = await this.categoryRepository.findByName(name);

    if (categoryAlreadyExists) {
      throw new Error('Category Already Exists');
    }

    const category = await this.categoryRepository.create({ name, description });
    return category;
  }
}

export default CreateCategoryUseCase;
