import CreateUserController from '@modules/accounts/useCases/createUser/CreateUserController'
import {Router} from 'express'
import ensureAuthenticated from 'middlwares/ensureAuthenticated';

const router = Router()

const createUserController = new CreateUserController;

router.post('/',ensureAuthenticated,createUserController.handle)


export default router
