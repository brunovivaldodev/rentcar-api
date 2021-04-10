import IUsersRepository from "@modules/accounts/repositories/IUsersRepository";
import { compare } from "bcrypt";
import { inject, injectable } from "tsyringe";
import {sign} from 'jsonwebtoken'
import AuthConfig from '@config/auth'
import AppError from "@shared/errors/AppError";

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
    private usersRepository : IUsersRepository ){}
  async execute({email, password} : IRequest) : Promise<IResponse>{

    const user =await this.usersRepository.findByEmail(email);

    if(!user){
      throw new AppError('Email or Password Incorret')
    }

    const passwordMatch = await compare(password, user.password)

    if(!passwordMatch){
      throw new AppError('Email or Password Incorret')
    }

    const {secret} = AuthConfig
    const token = sign({},secret,{
      subject : user.id,
      expiresIn : "1d"
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
