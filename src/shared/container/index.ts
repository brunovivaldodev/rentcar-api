import ICategoryRepository from '@modules/cars/repositories/ICategoriesRepository'
import CategoryRepository from '@modules/cars/repositories/implementations/CategoriesRepository'
import SpecificationsRepository from '@modules/cars/repositories/implementations/SpecificationsRepository'
import ISpecificationRepository from '@modules/cars/repositories/ISpecificationsRepository'
import {container} from 'tsyringe'


container.registerSingleton<ICategoryRepository>(
  "CategoryRepository",CategoryRepository
)

container.registerSingleton<ISpecificationRepository>(
  "SpecificationRepository",SpecificationsRepository
)