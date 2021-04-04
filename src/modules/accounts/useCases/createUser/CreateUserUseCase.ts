import { inject, injectable } from "tsyringe";
import IUsersRepository from '@modules/accounts/repositories/IUsersRepository'
import IUsersCreateDTO from "@modules/accounts/dtos/IUsersCreateDTO";
import { hash } from 'bcrypt'

@injectable()
class CreateUserUseCase {
  constructor(@inject('UserRepositories')
  private usersRpository: IUsersRepository) { }
  async execute({ name, email, password, driver_license }: IUsersCreateDTO) {

    const userAlreadyExists = await this.usersRpository.findByEmail(name);

    if(userAlreadyExists){
      throw new Error("Users already Existis")
    }

    const passwordHash = await hash(password, 8)

    const user = await this.usersRpository.create(
      {
        name,
        email,
        password : passwordHash,
        driver_license
      })

    return user
  }

}

export default CreateUserUseCase;
