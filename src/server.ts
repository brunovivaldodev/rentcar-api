import express from 'express'
import router from './routes'
import swaggerUi from 'swagger-ui-express'
import swaggerFile from './swagger.json'

const app = express()
app.use(express.json())

app.use("/api-docs",swaggerUi.serve,swaggerUi.setup(swaggerFile))
app.use(router)


app.listen(3000,()=>{
    console.log('Server is running at port 3000')
})
