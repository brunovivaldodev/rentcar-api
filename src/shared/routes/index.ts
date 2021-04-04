import {Router} from 'express'
import categoriesRoutes from './categories.routes'
import SpecificationsRoutes from './specifications.routes'
import UserRoutes from './user.routes'
import AuthenticateRoutes from './authenticate.routes'

const router = Router()

router.use('/session',AuthenticateRoutes)
router.use('/users',UserRoutes)
router.use('/categories',categoriesRoutes)
router.use('/specifications',SpecificationsRoutes)



export default router
