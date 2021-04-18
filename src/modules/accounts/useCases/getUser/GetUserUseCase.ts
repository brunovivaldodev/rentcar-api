import { inject, injectable } from "tsyringe";
import IUsersRepository from '@modules/accounts/repositories/IUsersRepository'

interface IRequest {
  id : string
}
@injectable()
class CreateUserUseCase {
  constructor(@inject('UserRepositories')
  private usersRepository: IUsersRepository) { }
  async execute({ id }: IRequest) {

    const user = await this.usersRepository.findById(id)

    return user
  }

}

export default CreateUserUseCase;
