import User from "../entities/User";
import UsersCreateDTO from "../dtos/IUsersCreateDTO";



interface IUsersRepository{

  create(data : UsersCreateDTO): Promise<User>
  findByEmail(email :string): Promise<User | undefined>
  findById(id : string): Promise<User | undefined>
}

export default IUsersRepository;
