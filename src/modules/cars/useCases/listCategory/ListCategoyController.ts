import { Request, Response } from "express";
import ListCategoryUseCase from "./ListCategoryUseCase";


class ListCategoryController{
  constructor(private listCategoryUseCase : ListCategoryUseCase){}
  public handle(_: Request, response:Response){
    const category = this.listCategoryUseCase.execute()

    return response.status(200).json(category)
  }
}
export default ListCategoryController
