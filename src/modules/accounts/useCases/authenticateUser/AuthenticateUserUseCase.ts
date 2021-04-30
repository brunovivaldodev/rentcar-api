import IUsersRepository from "@modules/accounts/repositories/IUsersRepository";
import { compare } from "bcrypt";
import { inject, injectable } from "tsyringe";
import {sign} from 'jsonwebtoken'
import AppError from "@shared/errors/AppError";
import IUsersTokensRepository from "@modules/accounts/repositories/IUserTokensRepository";
import auth from "@config/auth";
import IDateProvider from "@shared/container/providers/DateProvider/IDateProvider";

interface IRequest{
  email : string,
  password : string
}

interface IResponse{
  user : {
    name : string,
    email : string
  }
  token : string,
  refresh_token :string
}
@injectable()
class AuthenticateUserUseCase {
  constructor(
    @inject('UserRepositories')
    private usersRepository : IUsersRepository,
    @inject('UsersTokenRepository')
    private usersTokensRepository : IUsersTokensRepository,
    @inject("DayjsDateProvider")
    private dateProvider : IDateProvider
    ){}
  async execute({email, password} : IRequest) : Promise<IResponse>{

    const user =await this.usersRepository.findByEmail(email);
    const {expires_in_token,secret_refresh_token,secret_token,expires_in_resfresh_token_days,expires_in_resfresh_token} = auth

    if(!user){
      throw new AppError('Email or Password Incorret')
    }

    const passwordMatch = await compare(password, user.password)

    if(!passwordMatch){
      throw new AppError('Email or Password Incorret')
    }

    const token = sign({},secret_token,{
      subject : user.id,
      expiresIn : expires_in_token
    })

    const refresh_token = sign({email},secret_refresh_token ,{
      subject : user.id,
      expiresIn : expires_in_resfresh_token
    })

    const expires_date = this.dateProvider.addDays(expires_in_resfresh_token_days)
    await this.usersTokensRepository.create({
      user_id : user.id,
      refresh_token ,
      expires_date
    })

     const response : IResponse =  {
      user : {
        name : user.name,
        email : user.email
      },
      token,
      refresh_token
    }

    return  response

  }
}


export default AuthenticateUserUseCase;
