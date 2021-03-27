import ISpecificationRepository from "@modules/cars/repositories/ISpecificationsRepository";

interface IRequest {
  name : string,
  description : string
}

class CreateSpecificationUseCase {
  constructor (private specificationsRepository :ISpecificationRepository){}
  public execute({name,description}: IRequest){
      const specificationAlreadyExists = this.specificationsRepository.findByName(name)

      if(specificationAlreadyExists){
        throw new Error('Specification Already Exists')
      }
      const specification = this.specificationsRepository.create({name,description})
      return specification
  }
}

export default CreateSpecificationUseCase
