import { request, response, Router } from 'express'
import {createCategoryController} from '@modules/cars/useCases/createCategory'
import {listcategoryController} from '@modules/cars/useCases/listCategory'
import multer from 'multer'
import importCategoryController from '@modules/cars/useCases/importCategory'

const router = Router()

const upload = multer({
  dest : './tmp'
})

router.post('/', (request, response) => {
  return createCategoryController.handle(request,response)
})

router.get('/', (request, response) => {
  return listcategoryController.handle(request,response)
})

router.post('/import',upload.single('file'),(request,response)=>{

  importCategoryController.handle(request,response)

})

export default router
