import Specification from '@modules/cars/entities/Specification'
import ICreateSpecificationDTO from '../dtos/ICreateSpecificationDTO';
import ISpecificationRepository from '../ISpecificationsRepository';
import { Repository, getRepository } from 'typeorm'

class SpecificationsRepository implements ISpecificationRepository {
  private repository: Repository<Specification>

  constructor() {
    this.repository = getRepository(Specification)
  }

  public async create({ name, description }: ICreateSpecificationDTO): Promise<Specification> {

    const specification = this.repository.create({ name, description })

    await this.repository.save(specification)

    return specification
  }
  public async index(): Promise<Specification[]> {
    const specification = await this.repository.find()
    return specification
  }

  public async findByName(name: string): Promise<Specification | undefined> {
    const specification = await this.repository.findOne({
      where: { name }
    })
    return specification;
  }


}

export default SpecificationsRepository
