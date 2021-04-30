import IUsersRepository from "@modules/accounts/repositories/IUsersRepository";
import { compare } from "bcrypt";
import { inject, injectable } from "tsyringe";
import {sign} from 'jsonwebtoken'
import AppError from "@shared/errors/AppError";
import IUsersTokensRepository from "@modules/accounts/repositories/IUserTokensRepository";
import auth from "@config/auth";

interface IRequest{
  email : string,
  password : string
}

interface IResponse{
  user : {
    name : string,
    email : string
  }
  token : string
}
@injectable()
class AuthenticateUserUseCase {
  constructor(
    @inject('UserRepositories')
    private usersRepository : IUsersRepository,
    @inject('UsersTokenRepository')
    private usersTokensRepository : IUsersTokensRepository
    ){}
  async execute({email, password} : IRequest) : Promise<IResponse>{

    const user =await this.usersRepository.findByEmail(email);

    if(!user){
      throw new AppError('Email or Password Incorret')
    }

    const passwordMatch = await compare(password, user.password)

    if(!passwordMatch){
      throw new AppError('Email or Password Incorret')
    }

    const token = sign({},auth.secret_token,{
      subject : user.id,
      expiresIn : auth.expires_in_token
    })

     const response : IResponse =  {
      user : {
        name : user.name,
        email : user.email
      },
      token
    }

    return  response

  }
}


export default AuthenticateUserUseCase;
