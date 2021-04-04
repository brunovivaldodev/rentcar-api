import User from '@modules/accounts/entities/User';
import { getRepository, Repository } from 'typeorm'
import UsersCreateDTO from '../../dtos/IUsersCreateDTO';
import IUsersRepository from '../IUsersRepository';


class UserRepositories implements IUsersRepository {

  private repository: Repository<User>

  constructor() {
    this.repository = getRepository(User)
  }
  async create({ name, email, password, driver_license }: UsersCreateDTO): Promise<User> {

    const user = this.repository.create({name,email,password, driver_license});

    await this.repository.save(user)

    return user;

  }

  async findByEmail(email:string): Promise<User | undefined>{

    const user = await this.repository.findOne({where : {email}});

    return user
  }

  async findById(id: string): Promise<User | undefined>{
    const user = await this.repository.findOne(id)
    return user
  }

}

export default UserRepositories
