import UserRepositories from '@modules/accounts/infra/typeorm/repositories/UserRepositories'
import IUsersRepository from '@modules/accounts/repositories/IUsersRepository'
import CategoryRepository from '@modules/cars/infra/typeorm/repositories/CategoriesRepository'
import SpecificationsRepository from '@modules/cars/infra/typeorm/repositories/SpecificationsRepository'
import ICategoryRepository from '@modules/cars/repositories/ICategoriesRepository'
import ISpecificationRepository from '@modules/cars/repositories/ISpecificationsRepository'
import {container} from 'tsyringe'


container.registerSingleton<ICategoryRepository>(
  "CategoryRepository",CategoryRepository
)

container.registerSingleton<ISpecificationRepository>(
  "SpecificationRepository",SpecificationsRepository
)

container.registerSingleton<IUsersRepository>(
  "UserRepositories",UserRepositories
)
