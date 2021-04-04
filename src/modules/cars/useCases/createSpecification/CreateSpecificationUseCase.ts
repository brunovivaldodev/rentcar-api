import ISpecificationRepository from "@modules/cars/repositories/ISpecificationsRepository";
import AppError from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";

interface IRequest {
  name : string,
  description : string
}
@injectable()
class CreateSpecificationUseCase {
  constructor (
    @inject("SpecificationRepository")
    private specificationsRepository :ISpecificationRepository){}
  public async execute({name,description}: IRequest){
      const specificationAlreadyExists = await this.specificationsRepository.findByName(name)

      if(specificationAlreadyExists){
        throw new AppError('Specification Already Exists',400)
      }
      const specification = await this.specificationsRepository.create({name,description})
      return specification
  }
}

export default CreateSpecificationUseCase
