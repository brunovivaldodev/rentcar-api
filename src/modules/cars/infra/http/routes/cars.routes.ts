import CreateCarController from "@modules/cars/useCases/createCar/CreateCarController";
import ListAvaliableCarController from "@modules/cars/useCases/listAvaliableCar/listAvaliableCarController";
import { ensureAdmin } from "@shared/infra/http/middlewares/ensureAdmin";
import ensureAuthenticated from "@shared/infra/http/middlewares/ensureAuthenticated";
import {Router} from "express"

const routes = Router();

const createCarController = new CreateCarController
const listaAvaliable = new ListAvaliableCarController


routes.post('/', ensureAuthenticated,ensureAdmin,createCarController.handle)
routes.get('/avaliable', listaAvaliable.handle)


export default routes
