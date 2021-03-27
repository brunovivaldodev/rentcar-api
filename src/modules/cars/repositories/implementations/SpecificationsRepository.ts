import Specification from '@modules/cars/model/Specification'
import ICreateSpecificationDTO from '../dtos/ICreateSpecificationDTO';
import ISpecificationRepository from '../ISpecificationsRepository';

class SpecificationsRepository implements ISpecificationRepository {
  private specifications: Specification[];

  constructor() {
    this.specifications = []
  }

  create({ name, description }: ICreateSpecificationDTO): Specification {
    const specification = new Specification()

    Object.assign(specification, {
      name,
      description,
      created_at : new Date()
    })
    this.specifications.push(specification)
    return specification
  }
  index(): Specification[] {
    throw new Error('Method not implemented.');
  }

  findByName(name :string): Specification | undefined{
    const specification = this.specifications.find((specification) => specification.name === name)
    return specification;
  }


}

export default SpecificationsRepository
