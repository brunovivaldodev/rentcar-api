import ICreateCarDTO from "@modules/cars/dtos/ICreateCarDTO";
import Car from "@modules/cars/infra/typeorm/entities/Car";
import ICarsRepository from "../ICarsRepository";


class CarsRepositoryFakes implements ICarsRepository{
  public Cars : Car[] = []

  public async create({name,brand,daily_rate,license_plate,description,fine_amount,category_id}: ICreateCarDTO): Promise<Car> {
    const car = new Car()

    Object.assign(car,{
      name,
      brand,
      daily_rate,
      license_plate,
      description,
      fine_amount,
      category_id
    })

    this.Cars.push(car)

    return car
  }

  async findByLicensePlate(license_plate: string): Promise<Car | undefined> {
    const car = this.Cars.find((car) => car.license_plate === license_plate)
    return car
  }

}


export default CarsRepositoryFakes
