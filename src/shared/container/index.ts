import { container } from 'tsyringe'

import "@shared/container/providers"
import UserRepositories from '@modules/accounts/infra/typeorm/repositories/UserRepositories'
import IUsersRepository from '@modules/accounts/repositories/IUsersRepository'
import CarsRepository from '@modules/cars/infra/typeorm/repositories/CarsRepository'
import CategoryRepository from '@modules/cars/infra/typeorm/repositories/CategoriesRepository'
import SpecificationsRepository from '@modules/cars/infra/typeorm/repositories/SpecificationsRepository'
import ICarsRepository from '@modules/cars/repositories/ICarsRepository'
import ICategoryRepository from '@modules/cars/repositories/ICategoriesRepository'
import ISpecificationRepository from '@modules/cars/repositories/ISpecificationsRepository'
import RentalRepository from '@modules/rentals/infra/typeorm/repositories/RentalRepository'
import IRentalsRepository from '@modules/rentals/repositories/IRentalsRepository'
import UserTokensRepository from '@modules/accounts/infra/typeorm/repositories/UserTokensRepository'
import IUsersTokensRepository from '@modules/accounts/repositories/IUserTokensRepository'


container.registerSingleton<ICategoryRepository>(
  "CategoryRepository", CategoryRepository
)

container.registerSingleton<ISpecificationRepository>(
  "SpecificationRepository", SpecificationsRepository
)

container.registerSingleton<IUsersRepository>(
  "UserRepositories", UserRepositories
)


container.registerSingleton<ICarsRepository>(
  "CarsRepository", CarsRepository
)

container.registerSingleton<IRentalsRepository>(
  "RentalRepository", RentalRepository
)

container.registerSingleton<IUsersTokensRepository>(
  "UsersTokensRepository", UserTokensRepository
)
