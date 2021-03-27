import CreateCategoryUseCase from './CreateCategoryUseCase'
import {Request,Response} from 'express'


class CreateCategoryController {
  constructor(private createCategoryUseCase : CreateCategoryUseCase){}
  handle(request : Request, response : Response){
    const { name, description } = request.body

    const category = this.createCategoryUseCase.execute({name,description})

    return response.status(201).json(category)
  }
}

export default CreateCategoryController
