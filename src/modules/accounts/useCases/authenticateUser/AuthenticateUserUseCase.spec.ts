import IUsersCreateDTO from "@modules/accounts/dtos/IUsersCreateDTO"
import UserRepositoryFake from "@modules/accounts/repositories/fakes/UserRepositoryFake"
import AppError from "@shared/errors/AppError"
import CreateUserUseCase from "../createUser/CreateUserUseCase"
import AuthenticateUserUseCase from "./AuthenticateUserUseCase"

let authenticateUserUseCase: AuthenticateUserUseCase
let userRepositoryFake: UserRepositoryFake
let createUserUseCase: CreateUserUseCase

describe("Authenticate User", () => {
  beforeEach(() => {
    userRepositoryFake = new UserRepositoryFake()
    createUserUseCase = new CreateUserUseCase(userRepositoryFake)
    authenticateUserUseCase = new AuthenticateUserUseCase(userRepositoryFake);

  })
  it("should be able to autheticate an user", async () => {

    const user: IUsersCreateDTO = {
      name: "myname",
      email: "username@live.com",
      driver_license: "driver_license",
      password: "mypassword",
    }

    await createUserUseCase.execute(user)

    const userAuthenticaded = await authenticateUserUseCase.execute({
      email: user.email,
      password: user.password
    })

    expect(userAuthenticaded).toHaveProperty("token")
  })

  it("should not be able no authenticate an nonexistent user",() => {
    expect( async () => {
       await authenticateUserUseCase.execute({
        email: "useremail@gmail.com",
        password: "userPassword"
      })
    }).rejects.toBeInstanceOf(AppError)
  })

  it("should not be able no authenticate with wrong password",() => {
    expect( async () => {
      const user: IUsersCreateDTO = {
        name: "myname",
        email: "username@live.com",
        driver_license: "driver_license",
        password: "mypassword",
      }

      await createUserUseCase.execute(user)

      await authenticateUserUseCase.execute({
        email: user.email,
        password: "wrong password"
      })
    }).rejects.toBeInstanceOf(AppError)
  })
})
