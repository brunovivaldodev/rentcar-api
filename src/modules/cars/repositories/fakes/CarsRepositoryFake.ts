import ICreateCarDTO from "@modules/cars/dtos/ICreateCarDTO";
import Car from "@modules/cars/infra/typeorm/entities/Car";
import ICarsRepository from "../ICarsRepository";


class CarsRepositoryFakes implements ICarsRepository{

  public Cars : Car[] = []

  public async create({name,brand,daily_rate,license_plate,description,fine_amount,category_id,avaliable}: ICreateCarDTO): Promise<Car> {
    const car = new Car()

    Object.assign(car,{
      name,
      brand,
      daily_rate,
      license_plate,
      description,
      fine_amount,
      category_id,
      avaliable
    })

    this.Cars.push(car)

    return car
  }

  public async findByLicensePlate(license_plate: string): Promise<Car | undefined> {
    const car = this.Cars.find((car) => car.license_plate === license_plate)
    return car
  }

  public async findAvailable(): Promise<Car[]> {
    const cars = this.Cars.filter((car)=> car.avaliable === true )
    return cars
  }

}


export default CarsRepositoryFakes
