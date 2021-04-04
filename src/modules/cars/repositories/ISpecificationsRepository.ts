import Specification from '../entities/Specification'

import ICreateSpecificationDTO from './dtos/ICreateSpecificationDTO'

interface ISpecificationRepository {
  create(data : ICreateSpecificationDTO) : Promise<Specification>,
  index() : Promise<Specification[]>,
  findByName(name:string) : Promise<Specification | undefined>;
}

export default ISpecificationRepository;
