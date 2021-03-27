import CategoryRepository from "@modules/cars/repositories/implementations/CategoriesRepository";
import ImportCategoryController from "./importCategoryController";
import ImportCategoryUseCase from "./importCategoryUseCase";


const categoryRepository = CategoryRepository.getInstance()
const importCategoryUseCase = new ImportCategoryUseCase(categoryRepository)
const importCategoryController = new ImportCategoryController(importCategoryUseCase)


export default importCategoryController
