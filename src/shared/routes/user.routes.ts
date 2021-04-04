import CreateUserController from '@modules/accounts/useCases/createUser/CreateUserController'
import {Router} from 'express'

const router = Router()

const createUserController = new CreateUserController;

router.post('/',createUserController.handle)


export default router
