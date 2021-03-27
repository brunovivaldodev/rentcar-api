import Specification from "../model/Specification";
import ISpecificationRepository from "../repositories/ISpecificationsRepository";

interface IRequest {
  name: string,
  description: string
}
class CreateSpecificationService {
  constructor(private specificationsRepository: ISpecificationRepository) { }
  public execute({ name, description }: IRequest): Specification {

    let specificationAlreadyExists = this.specificationsRepository.findByName(name)
    if(specificationAlreadyExists){
      throw new Error('Specifications Already Exists')
    }
    const specification = this.specificationsRepository.create({ name, description })
    return specification
  }
}

export default CreateSpecificationService;
