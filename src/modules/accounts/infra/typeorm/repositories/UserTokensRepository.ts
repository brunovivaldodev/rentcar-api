import ITokensCreateDTO from "@modules/accounts/dtos/ITokensCreateDTO";
import IUsersTokensRepository from "@modules/accounts/repositories/IUserTokensRepository";
import AppError from "@shared/errors/AppError";
import { getRepository, Repository } from "typeorm";
import UserTokens from "../entities/UserTokens";

class UserTokensRepository implements IUsersTokensRepository {

  private repository: Repository<UserTokens>
  constructor() {
    this.repository = getRepository(UserTokens)
  }

  public async create({ user_id, expires_date, refresh_token }: ITokensCreateDTO): Promise<UserTokens> {
    const userToken = this.repository.create({ expires_date, refresh_token, user_id })

    await this.repository.save(userToken)

    return userToken
  }
  public async findByUserIdAndRefreshToken(user_id: string, refresh_token: string): Promise<UserTokens | undefined> {
    const userTokens = await this.repository.findOne({ user_id, refresh_token })
    return userTokens
  }

  public async deleteById(id: string): Promise<void> {
    await this.repository.delete(id)
  }

  public async findByRefreshToken(refresh_token: string): Promise<UserTokens | undefined> {
    const userToken = await this.repository.findOne({refresh_token})

    return userToken
  }

}


export default UserTokensRepository
