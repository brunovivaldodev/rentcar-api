import CarsRepositoryFakes from "@modules/cars/repositories/fakes/CarsRepositoryFake";
import ListCarUseCase from "./ListAvaliableCarUseCase"


let listCarUseCase: ListCarUseCase;
let carsRepositoryFake: CarsRepositoryFakes
describe("List car", () => {

  beforeEach(() => {
    carsRepositoryFake = new CarsRepositoryFakes;
    listCarUseCase = new ListCarUseCase(carsRepositoryFake)
  })

  it("Should be able to list all avaliable cars", async () => {

    const car = await carsRepositoryFake.create({
      name: "BmW",
      description: "carro fodido",
      daily_rate: 12,
      license_plate: "Abe-2de3",
      brand: "BMW",
      fine_amount: 123,
      avaliable: false,
      category_id: "category_id"
    })

    const cars = await listCarUseCase.execute()

    expect(cars).toEqual([car])
  })
})
