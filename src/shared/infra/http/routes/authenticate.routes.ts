import AuthenticateUserController from '@modules/accounts/useCases/authenticateUser/AuthenticateUserController'
import RefreshTokenController from '@modules/accounts/useCases/refreshToken/RefreshTokenController'
import {Router} from 'express'

const router = Router()

const authenticateUserController= new AuthenticateUserController
const refreshTokenController= new RefreshTokenController

router.post('/sessions', authenticateUserController.handle)
router.post('/refresh-token', refreshTokenController.handle)




export default router
