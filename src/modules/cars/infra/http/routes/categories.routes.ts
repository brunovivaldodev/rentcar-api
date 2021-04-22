import { Router } from 'express'
import multer from 'multer'
import ListCategoryController from '@modules/cars/useCases/listCategory/ListCategoyController'
import CreateCategoryController from '@modules/cars/useCases/createCategory/CreateCategoryController'
import ImportCategoryController from '@modules/cars/useCases/importCategory/importCategoryController'
import ensureAuthenticated from '@shared/infra/http/middlewares/ensureAuthenticated'
import { ensureAdmin } from '@shared/infra/http/middlewares/ensureAdmin'

const router = Router()

const upload = multer({
  dest: './tmp',
})

const createCategoryController = new CreateCategoryController()
const listCategoryController = new ListCategoryController()
const importCategoryController = new ImportCategoryController()

router.post('/',ensureAuthenticated,ensureAdmin, createCategoryController.handle)

router.get('/', listCategoryController.handle )

router.post('/import',upload.single('file'),importCategoryController.handle)

export default router
