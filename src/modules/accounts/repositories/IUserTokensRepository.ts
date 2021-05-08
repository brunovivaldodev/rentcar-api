import ITokensCreateDTO from "../dtos/ITokensCreateDTO";
import UserTokens from "../infra/typeorm/entities/UserTokens";

interface IUsersTokensRepository {
  create({ user_id,expires_date,refresh_token} : ITokensCreateDTO) : Promise<UserTokens>
  findByUserIdAndRefreshToken(user_id : string, refresh_token : string) : Promise<UserTokens | undefined>
  deleteById(id :string) : Promise<void>
  findByRefreshToken(refresh_token : string) : Promise<UserTokens| undefined>
}

export default IUsersTokensRepository
