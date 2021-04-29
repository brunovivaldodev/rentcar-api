import CarsRepositoryFakes from "@modules/cars/repositories/fakes/CarsRepositoryFake"
import AppError from "@shared/errors/AppError"
import CreateCarUseCase from "./CreateCarUseCase"


let createCarUseCase: CreateCarUseCase
let carsRepository : CarsRepositoryFakes

describe("Create Car", () => {

  beforeEach(() => {
    carsRepository = new CarsRepositoryFakes()
    createCarUseCase = new CreateCarUseCase(carsRepository)
  })

  it("should be able to create a new car", async () => {
   const car =  await createCarUseCase.execute({
      name : "Name Car",
      brand : "Brand",
      category_id : "category_id",
      daily_rate : 100,
      description : "Description Car",
      fine_amount : 60,
      license_plate : "ABC_1234"
    })

  })

  it("should not be able to create a car with exists license plate", async ()=>{

    expect( async ()=>{
      await createCarUseCase.execute({
        name : "Name Car",
        brand : "Brand",
        category_id : "category_id",
        daily_rate : 100,
        description : "Description Car",
        fine_amount : 60,
        license_plate : "ABC_1234"
      })
      await createCarUseCase.execute({
        name : "Name Car",
        brand : "Brand",
        category_id : "category_id",
        daily_rate : 100,
        description : "Description Car",
        fine_amount : 60,
        license_plate : "ABC_1234"
      })
    }).rejects.toBeInstanceOf(AppError)
  })

  it("should be able to create a new a car with avaliabe true by default", async () => {
    const car =  await createCarUseCase.execute({
       name : "Car Avaliable",
       brand : "Brand",
       category_id : "category_id",
       daily_rate : 100,
       description : "Description Car",
       fine_amount : 60,
       license_plate : "ABCD",
     })
     expect(car.avaliable).toBe(true)
   })

})
