import User from "../entities/User";
import UsersCreateDTO from "../dtos/IUsersCreateDTO";



interface IUsersRepository{

  create(data : UsersCreateDTO): Promise<User>
  findByEmail(name :string): Promise<User | undefined>
}

export default IUsersRepository;
