import CreateUserController from '@modules/accounts/useCases/createUser/CreateUserController'
import UpdateUserAvatarController from '@modules/accounts/useCases/updateUserAvatar/UpdateUserAvatarController';
import {Router} from 'express'
import multer from 'multer'
import uploadConfig from '@config/upload'
import ensureAuthenticated from '@shared/http/middlewares/ensureAuthenticated';

const uploadAvatar = multer(uploadConfig('./tmp/avatar'))
const router = Router()

const createUserController = new CreateUserController;
const updateUserAvatarController = new UpdateUserAvatarController;

router.post('/',uploadAvatar.single('avatar'),createUserController.handle)
router.patch('/avatar',ensureAuthenticated,uploadAvatar.single('avatar'),updateUserAvatarController.handle)



export default router
