import RentalsRepositoryFake from "@modules/rentals/repositories/fakes/RentalsRepositoryFake"
import IDateProvider from "@shared/container/providers/DateProvider/IDateProvider"
import DayjsDateProvider from "@shared/container/providers/DateProvider/implementations/DayjsDateProvider"
import CreateRentalsUseCase from "./createRentalsUseCase"

describe("Create Rentals", () => {

  let createRentalUseCase: CreateRentalsUseCase
  let rentalsRepositoryFake: RentalsRepositoryFake
  let dayjsDateProvider : IDateProvider

  beforeEach(() => {
    rentalsRepositoryFake = new RentalsRepositoryFake()
    dayjsDateProvider = new DayjsDateProvider()
    createRentalUseCase = new CreateRentalsUseCase(rentalsRepositoryFake,dayjsDateProvider)
  })

  it("Should be able to create a rental", async () => {

    const rental = createRentalUseCase.execute({
      car_id: '1222',
      user_id: '23233',
      expected_return_date: new Date()
    })

    expect(rental).toHaveProperty('start_date')


  })
})
