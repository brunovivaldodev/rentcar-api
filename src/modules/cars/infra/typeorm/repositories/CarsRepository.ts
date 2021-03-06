import ICreateCarDTO from "@modules/cars/dtos/ICreateCarDTO";
import ICarsRepository from "@modules/cars/repositories/ICarsRepository";
import { getRepository, Repository } from "typeorm";
import Car from "../entities/Car";

class CarsRepository implements ICarsRepository {

  private repository: Repository<Car>

  constructor() {
    this.repository = getRepository(Car)
  }
  findById(id: string): Promise<Car | undefined> {
    const car = this.repository.findOne(id)

    return car
  }

  async create({ name, brand, category_id, daily_rate, description, fine_amount, license_plate }: ICreateCarDTO): Promise<Car> {

    const car = this.repository.create({ name, brand, category_id, daily_rate, description, fine_amount, license_plate })

    await this.repository.save(car)

    return car
  }
  async findByLicensePlate(license_plate: string): Promise<Car | undefined> {
    const car = await this.repository.findOne({ license_plate })
    return car
  }

  async findAvailable(brand?: string, name?: string, category_id?: string): Promise<Car[]> {
    const carsQuery = await this.repository
      .createQueryBuilder("car")
      .where("avaliable = :avaliable", { avaliable: true })

    if (brand) {
      carsQuery.andWhere("brand = :brand", { brand })
    }

    if (name) {
      carsQuery.andWhere("name = :name", { name })
    }

    if(category_id){
      carsQuery.andWhere("category_id = :category_id", { category_id })
    }

    const cars = await carsQuery.getMany()
    return cars
  }

}

export default CarsRepository
