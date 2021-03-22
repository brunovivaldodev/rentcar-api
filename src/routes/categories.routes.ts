import { response, Router } from 'express'
import Category from '../model/Category'
import CategoryRepository from '../repositories/CategoryRepository'

const router = Router()

const categoryRepository = new CategoryRepository()

router.post('/', (request, response) => {
    const { name, description } = request.body

    const category = categoryRepository.create({name,description})


    return response.status(201).json(category)
})

router.get('/',(request,response)=>{

    const category = categoryRepository.index()

    response.status(200).json(category)
})

export default router