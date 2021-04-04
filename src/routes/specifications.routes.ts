import CreateSpecificationController from '@modules/cars/useCases/createSpecification/CreateSpecificationController';
import { Router } from 'express'

const createSpecificationController = new CreateSpecificationController()
const router = Router();

router.post('/', createSpecificationController.handle)


export default router;
