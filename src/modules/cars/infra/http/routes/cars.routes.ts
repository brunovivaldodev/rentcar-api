import CreateCarController from "@modules/cars/useCases/createCar/CreateCarController";
import { ensureAdmin } from "@shared/infra/http/middlewares/ensureAdmin";
import ensureAuthenticated from "@shared/infra/http/middlewares/ensureAuthenticated";
import {Router} from "express"

const routes = Router();

const createCarController = new CreateCarController


routes.post('/', ensureAuthenticated,ensureAdmin,createCarController.handle)


export default routes
