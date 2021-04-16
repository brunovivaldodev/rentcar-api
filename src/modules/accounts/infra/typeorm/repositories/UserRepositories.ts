import User from '@modules/accounts/infra/typeorm/entities/User';
import { getRepository, Repository, UpdateResult } from 'typeorm'
import UsersCreateDTO from '@modules/accounts/dtos/IUsersCreateDTO';
import IUsersRepository from '@modules/accounts/repositories/IUsersRepository';


class UserRepositories implements IUsersRepository {

  private repository: Repository<User>

  constructor() {
    this.repository = getRepository(User)
  }

  async updateAvatar(id: string,avatar: string): Promise<UpdateResult> {
    const user = await this.repository.update(id,{avatar})
    return user
  }

  async create({ name, email, password, driver_license,avatar}: UsersCreateDTO): Promise<User> {

    const user = this.repository.create({name,email,password, driver_license,avatar});

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
