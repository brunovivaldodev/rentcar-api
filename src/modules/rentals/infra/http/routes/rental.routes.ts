import CreateRentalController from '@modules/rentals/useCases/createRentals/createRentalsController'
import ensureAuthenticated from '@shared/infra/http/middlewares/ensureAuthenticated'
import {Router} from 'express'

const routes = Router()

const createRentalController = new CreateRentalController()

routes.post("/",ensureAuthenticated,createRentalController.handle)


export default routes
