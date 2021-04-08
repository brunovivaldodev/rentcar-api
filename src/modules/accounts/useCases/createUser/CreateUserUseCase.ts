import { inject, injectable } from "tsyringe";
import IUsersRepository from '@modules/accounts/repositories/IUsersRepository'
import IUsersCreateDTO from "@modules/accounts/dtos/IUsersCreateDTO";
import { hash } from 'bcrypt'
import AppError from "@shared/errors/AppError";

interface IRequest {
  name: string,
  email: string,
  password: string,
  driver_license: string,
  avatar?: string
}
@injectable()
class CreateUserUseCase {
  constructor(@inject('UserRepositories')
  private usersRepository: IUsersRepository) { }
  async execute({ name, email, password, driver_license,avatar }: IRequest) {

    const userAlreadyExists = await this.usersRepository.findByEmail(email);

    if (userAlreadyExists) {
      throw new AppError("Users already Existis",400)
    }

    const passwordHash = await hash(password, 8)
    const user = await this.usersRepository.create(
      {
        name,
        email,
        password: passwordHash,
        driver_license,
        avatar
      })

    return user
  }

}

export default CreateUserUseCase;
