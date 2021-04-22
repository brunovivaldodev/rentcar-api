import UserRepositories from "@modules/accounts/infra/typeorm/repositories/UserRepositories";
import AppError from "@shared/errors/AppError";
import { NextFunction, Request, Response } from "express";

export async function ensureAdmin( request : Request, response : Response, next : NextFunction){

  const {id} = request.user

  const usersRpository = new UserRepositories()

  const user = await usersRpository.findById(id)

  if(!user?.isAdmin){
    throw new AppError("User isn't admin");
  }

  return next();

}
