import Car from "@modules/cars/infra/typeorm/entities/Car";
import ICarsRepository from "@modules/cars/repositories/ICarsRepository";
import AppError from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";

interface IRequest {
  name: string,
  description: string,
  daily_rate: number,
  license_plate: string,
  fine_amount: number,
  brand: string,
  category_id: string,
  avaliable?: boolean
}

@injectable()
class CreateCarUseCase {

  constructor(
    @inject("CarsRepository")
    private carsRepository: ICarsRepository
  ) { }

  async execute({ name, brand, category_id, description, daily_rate, fine_amount, license_plate, avaliable = true }: IRequest): Promise<Car> {

    const carAlreadyExists = await this.carsRepository.findByLicensePlate(license_plate)
    if (carAlreadyExists) {
      throw new AppError("Car already Exists")
    }
    const car = this.carsRepository.create({
      name, brand, category_id, description, daily_rate, fine_amount, license_plate, avaliable
    })

    return car

  }
}

export default CreateCarUseCase
