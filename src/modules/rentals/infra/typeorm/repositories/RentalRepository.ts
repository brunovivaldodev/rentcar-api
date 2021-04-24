import CreateRentalDTO from '@modules/rentals/dtos/CreateRentalDTO'
import IRentalsRepository from '@modules/rentals/repositories/IRentalsRepository'
import { getRepository, Repository } from 'typeorm'
import Rental from '../entities/Rental'

class RentalRepository implements IRentalsRepository {
  private repository: Repository<Rental>

  constructor() {
    this.repository = getRepository(Rental)
  }
  public async findOpenRentalByCar(car_id: string): Promise<Rental | undefined> {
    const openByCar = await this.repository.findOne({ car_id })
    return openByCar
  }
  public async findOpenRentalByUser(user_id: string): Promise<Rental | undefined> {
    const openByUser = await this.repository.findOne({ user_id })
    return openByUser

  }
  public async create({ car_id, expected_return_date, user_id }: CreateRentalDTO): Promise<Rental> {
    const rental = this.repository.create({
      car_id
      , expected_return_date, user_id
    })

    await this.repository.save(rental)

    return rental

  }

}

export default RentalRepository
