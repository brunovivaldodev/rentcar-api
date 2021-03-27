import CategoryRepository from "@modules/cars/repositories/implementations/CategoriesRepository";
import ListCategoryUseCase from "./ListCategoryUseCase";
import ListCategoryController from "./ListCategoyController";

const categoryRepository = CategoryRepository.getInstance()
const listCategoryUseCase = new ListCategoryUseCase(categoryRepository)

const listcategoryController = new ListCategoryController(listCategoryUseCase)


export {listcategoryController}
