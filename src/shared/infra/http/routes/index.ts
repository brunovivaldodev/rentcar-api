import {Router} from 'express'
import UserRoutes from '@modules/accounts/infra/http/routes/user.routes'
import CategoriesRoutes from '@modules/cars/infra/http/routes/categories.routes'
import SpecificationsRoutes from '@modules/cars/infra/http/routes/specifications.routes'


import AuthenticateRoutes from './authenticate.routes'

const router = Router()

router.use('/session',AuthenticateRoutes)
router.use('/users',UserRoutes)
router.use('/categories',CategoriesRoutes)
router.use('/specifications',SpecificationsRoutes)



export default router