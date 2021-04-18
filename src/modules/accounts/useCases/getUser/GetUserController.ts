import {Response,Request } from "express";
import { container } from "tsyringe";
import GetUserUseCase from "./GetUserUseCase";


class CreateUserController{
  async handle(request: Request , response: Response){

    const {id} = request.params
    const getUserUseCase = container.resolve(GetUserUseCase)

    const user = await getUserUseCase.execute({id })

    return response.status(201).json(user)

  }
}

export default CreateUserController;
