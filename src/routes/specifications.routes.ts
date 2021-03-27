import { createSpecificationController } from '@modules/cars/useCases/createSpecification';
import {Router} from 'express'

const router = Router();
router.post('/',(request,response)=>{

return createSpecificationController.handle(request,response)

})


export default router;
