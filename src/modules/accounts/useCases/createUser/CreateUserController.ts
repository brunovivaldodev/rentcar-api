import {Response,Request } from "express";
import { container } from "tsyringe";
import CreateUserUseCase from "./CreateUserUseCase";


class CreateUserController{
  async handle(request: Request , response: Response){

    const {name,email,password,driver_license} = request.body
    const avatar = request.file?.filename
    const createUserUseCase = container.resolve(CreateUserUseCase)

    const user = await createUserUseCase.execute({ name,email,password,driver_license,avatar})

    return response.status(201).json(user)

  }
}

export default CreateUserController;
