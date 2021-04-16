import User from "../infra/typeorm/entities/User";
import UsersCreateDTO from "../dtos/IUsersCreateDTO";
import { UpdateResult } from "typeorm";



interface IUsersRepository{

  create(data : UsersCreateDTO): Promise<User>
  findByEmail(email :string): Promise<User | undefined>
  findById(id : string): Promise<User | undefined>
  updateAvatar(id: string ,file : string) : Promise<UpdateResult>
}

export default IUsersRepository;
