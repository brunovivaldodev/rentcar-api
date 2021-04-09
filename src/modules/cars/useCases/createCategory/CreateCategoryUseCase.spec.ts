import AppError from "@shared/errors/AppError"
import Category from "../../entities/Category"
import CategoriesRepositoyFakes from "../../repositories/fakes/CategoriesRepositoryFake"
import CreateCategoryUseCase from "./CreateCategoryUseCase"

let createCategoryUseCase: CreateCategoryUseCase
let categoriesRepositoryFake: CategoriesRepositoyFakes
describe("CreateCategory", () => {

  beforeEach(() => {
    categoriesRepositoryFake = new CategoriesRepositoyFakes()
    createCategoryUseCase = new CreateCategoryUseCase(categoriesRepositoryFake)
  })

  it("should be able to create a new category", async () => {

    const categoryProps = {
      name: "CategoryTest",
      desctiption: "Teste"
    }
    const category = await createCategoryUseCase.execute({
      name: categoryProps.name,
      description: categoryProps.desctiption
    })

    expect(category).toHaveProperty("name")
    expect(category).toHaveProperty("description")

    const categoryCreated = await categoriesRepositoryFake.findByName(categoryProps.name)


    expect(categoryCreated).toHaveProperty("id")

  })

  it("should not be able to create a new category with name exist", async () => {

    expect(async () => {
      const categoryProps = {
        name: "CategoryTest",
        desctiption: "Teste"
      }

      await createCategoryUseCase.execute({
        name: categoryProps.name,
        description: categoryProps.desctiption
      })

      await createCategoryUseCase.execute({
        name: categoryProps.name,
        description: categoryProps.desctiption
      })
    }).rejects.toBeInstanceOf(AppError)

  })
})
