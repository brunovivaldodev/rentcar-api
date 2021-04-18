import AuthenticateUserController from '@modules/accounts/useCases/authenticateUser/AuthenticateUserController'
import {Router} from 'express'

const router = Router()

const authenticateUserController= new AuthenticateUserController
router.post('/', authenticateUserController.handle)



export default router
