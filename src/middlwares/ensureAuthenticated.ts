import authConfig from "@config/auth";
import UserRepositories from "@modules/accounts/repositories/implementations/UserRepositories";
import AppError from "@shared/errors/AppError";
import { NextFunction, Request, Response } from "express";
import { verify } from 'jsonwebtoken'

interface IVerifyOptions{
  sub : string
}

function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {

  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError("Token missing",403);
  }

  const [, token] = authHeader.split(" ")

  const { secret } = authConfig
  try {
    const {sub : user_id} = verify(token, secret) as IVerifyOptions
    const userRepository = new UserRepositories()

    const user = userRepository.findById(user_id)

    if(!user){
      throw new AppError("User does not exists",404)
    }
    next()
  } catch (error) {
    throw new AppError("Invalid token",400)
  }

}

export default ensureAuthenticated
