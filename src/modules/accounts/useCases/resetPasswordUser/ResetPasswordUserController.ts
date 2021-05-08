import IUsersTokensRepository from "@modules/accounts/repositories/IUserTokensRepository";
import { Request, Response } from "express";
import { container, inject } from "tsyringe";
import ResetPasswordUserUseCase from "./ResetPasswordUserUseCase";

class ResetPasswordController{


  public async handle(request : Request,response : Response) : Promise<Response>{
    const {token} = request.query
    const {password} = request.body
    const resetPasswordUserUseCase = container.resolve(ResetPasswordUserUseCase)
      await resetPasswordUserUseCase.execute({password,token : String(token)})
    return response.send()
  }
}

export default ResetPasswordController
