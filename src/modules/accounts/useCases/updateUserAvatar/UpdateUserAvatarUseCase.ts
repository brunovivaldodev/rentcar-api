import IUsersRepository from "@modules/accounts/repositories/IUsersRepository";
import { inject, injectable } from "tsyringe";
import deleteFile from '@utils/file'
import AppError from "@shared/errors/AppError";
interface IRequest {
  user_id: string;
  avatarFile: string
}

@injectable()
class UpdateUserAvatarUseCase {

  constructor(
    @inject('UserRepositories')
    private usersRepository: IUsersRepository
  ) { }
  async execute({ user_id, avatarFile }: IRequest) {

    const user = await this.usersRepository.findById(user_id)

    if (user) {
      await deleteFile(`./tmp/avatar/${user.avatar}`)
      user.avatar = avatarFile;
      this.usersRepository.updateAvatar(user_id,avatarFile)
    }

     throw new AppError('User Not Found',404)

  }
}

export default UpdateUserAvatarUseCase
