import ResetPasswordController from '@modules/accounts/useCases/resetPasswordUser/ResetPasswordUserController'
import SendForgotPasswordMailController from '@modules/accounts/useCases/sendForgotPasswordMail/sendForgotPasswordMailController'
import {Router} from 'express'

const router = Router()

const sendForgotPasswordMailController= new SendForgotPasswordMailController
const resetPasswordMailController= new ResetPasswordController


router.post('/forgot-password', sendForgotPasswordMailController.handle)
router.post('/reset-password', resetPasswordMailController.handle)





export default router
