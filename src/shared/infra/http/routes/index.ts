import {Router} from 'express'
import UserRoutes from '@modules/accounts/infra/http/routes/user.routes'
import CategoriesRoutes from '@modules/cars/infra/http/routes/categories.routes'
import SpecificationsRoutes from '@modules/cars/infra/http/routes/specifications.routes'
import CarsRoutes from '@modules/cars/infra/http/routes/cars.routes'
import RentalsRoutes from '@modules/rentals/infra/http/routes/rental.routes'
import PasswordRoutes from './password.routes'


import AuthenticateRoutes from './authenticate.routes'

const router = Router()

router.use('/',AuthenticateRoutes)
router.use('/users',UserRoutes)
router.use('/categories',CategoriesRoutes)
router.use('/specifications',SpecificationsRoutes)
router.use('/cars',CarsRoutes)
router.use('/rentals',RentalsRoutes)
router.use('/',PasswordRoutes)






export default router
