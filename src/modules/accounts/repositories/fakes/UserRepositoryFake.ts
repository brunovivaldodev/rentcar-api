import IUsersCreateDTO from "@modules/accounts/dtos/IUsersCreateDTO";
import User from "@modules/accounts/infra/typeorm/entities/User";
import { UpdateResult } from "typeorm";
import IUsersRepository from "../IUsersRepository";



class UserRepositoryFake implements IUsersRepository {
  users: User[] = []
  async create({ name, email, password, driver_license, avatar }: IUsersCreateDTO): Promise<User> {

    const user = new User;

    Object.assign(user, {
      name,
      email,
      password,
      driver_license,
      avatar
    })

    this.users.push(user)

    return user

  }
  async findByEmail(email: string): Promise<User | undefined> {
    const user = this.users.find((user) => user.email === email)
    return user
  }
   async findById(id: string): Promise<User | undefined> {
    const user = this.users.find((user) => user.id === id)
    return user
  }
  updateAvatar(id: string, file: string): Promise<UpdateResult> {
    throw new Error("Method not implemented.");
  }

}

export default UserRepositoryFake
