import CreateUserController from '@modules/accounts/useCases/createUser/CreateUserController'
import UpdateUserAvatarController from '@modules/accounts/useCases/updateUserAvatar/UpdateUserAvatarController';
import GetUserController from '@modules/accounts/useCases/getUser/GetUserController';

import {Router} from 'express'
import multer from 'multer'
import uploadConfig from '@config/upload'
import ensureAuthenticated from '@shared/infra/http/middlewares/ensureAuthenticated';

const uploadAvatar = multer(uploadConfig('./tmp/avatar'))
const router = Router()

const createUserController = new CreateUserController;
const updateUserAvatarController = new UpdateUserAvatarController;
const getUserController = new GetUserController;



router.post('/',uploadAvatar.single('avatar'),createUserController.handle)
router.get('/:id',ensureAuthenticated,getUserController.handle)
router.patch('/avatar',ensureAuthenticated,uploadAvatar.single('avatar'),updateUserAvatarController.handle)



export default router
