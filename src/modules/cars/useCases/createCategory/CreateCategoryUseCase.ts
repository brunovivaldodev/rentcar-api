import Category from "@modules/cars/model/Category";
import ICategoryRepository from "@modules/cars/repositories/ICategoriesRepository";


interface IRequest {
  name: string,
  description: string
}

class CreateCategoryUseCase {
  constructor(private categoryRepository: ICategoryRepository) { }

  public execute({ name, description }: IRequest) : Category{

    const categoryAlreadyExists = this.categoryRepository.findByName(name);

    if (categoryAlreadyExists) {
      throw new Error('Category Already Exists');
    }

    const category = this.categoryRepository.create({ name, description });

    return category;
  }
}

export default CreateCategoryUseCase;
