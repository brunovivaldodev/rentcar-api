import CategoryRepository from "@modules/cars/repositories/implementations/CategoriesRepository";

class ListCategoryUseCase {
  constructor (private categoryRepository : CategoryRepository){}
  public execute(){
    const category = this.categoryRepository.index()
    return category
  }
}

export default ListCategoryUseCase
