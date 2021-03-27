import Specification from '../model/Specification'

import ICreateSpecificationDTO from './dtos/ICreateSpecificationDTO'

interface ISpecificationRepository {
  create(data : ICreateSpecificationDTO) : Specification,
  index() : Specification[],
  findByName(name:string) : Specification | undefined;
}

export default ISpecificationRepository;
