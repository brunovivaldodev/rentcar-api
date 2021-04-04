import { Request, Response } from "express";
import ListCategoryUseCase from "./ListCategoryUseCase";
import {container} from 'tsyringe'

class ListCategoryController{
  public async handle(_: Request, response:Response){
    const listCategoryUseCase = container.resolve(ListCategoryUseCase)
    const category = await listCategoryUseCase.execute()

    return response.status(200).json(category)
  }
}
export default ListCategoryController
