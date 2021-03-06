import CreateRentalDTO from "@modules/rentals/dtos/CreateRentalDTO";
import Rental from "@modules/rentals/infra/typeorm/entities/Rental";
import IRentalsRepository from "../IRentalsRepository";

class RentalsRepositoryFake implements IRentalsRepository {
  public async create({car_id,expected_return_date,user_id}: CreateRentalDTO): Promise<Rental> {
    const rental = new Rental()

    Object.assign(rental,{
      car_id,
      expected_return_date,
      user_id,
      start_date : new Date()
    })

    this.rentals.push(rental)
    return rental
  }

  rentals: Rental[] = []
  public async findOpenRentalByCar(car_id: string): Promise<Rental  | undefined> {
    const rental = this.rentals.find(rental => rental.car_id === car_id && !rental.end_date)
    return rental
  }

  public async findOpenRentalByUser(user_id: string): Promise<Rental | undefined> {
    const rental = this.rentals.find(rental => rental.car_id === user_id && !rental.end_date)
    return rental
  }

}
export default RentalsRepositoryFake
