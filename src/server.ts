import "reflect-metadata"
import "./database"
import './shared/container'
import express, { NextFunction, Request, Response } from 'express'
import 'express-async-errors'
import router from '@shared/routes'
import swaggerUi from 'swagger-ui-express'
import swaggerFile from './swagger.json'
import AppError from "@shared/errors/AppError"

const app = express()
app.use(express.json())

app.use("/api-docs",swaggerUi.serve,swaggerUi.setup(swaggerFile))
app.use(router)

app.use((err:Error,resquest :Request,response :Response,next:NextFunction)=>{
  if (err instanceof AppError){
    return response.status(err.statusCode).json({
      message : err.message
    })
  }

  return response.status(500).json({
    status : 'error',
    message : `Internal Error Server -${err.stack}`
  })
})

app.listen(3333,()=>{
    console.log('Server is running at port 3333')
})
