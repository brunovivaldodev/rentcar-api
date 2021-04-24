import { Request, Response } from "express";
import { container } from "tsyringe";
import CreateRentalsUseCase from "./createRentalsUseCase";



class CreateRentalController {

  public async handle(request: Request, response: Response) : Promise<Response> {

    const {expected_return_date,car_id} = request.body
    const {id} = request.user

    const createRentalUseCase = container.resolve(CreateRentalsUseCase)

    const rental = await createRentalUseCase.execute({
      car_id, expected_return_date, user_id : id
    })

    return response.status(201).json(rental)

  }
}


export default CreateRentalController
