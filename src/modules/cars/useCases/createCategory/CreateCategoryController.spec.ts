import app from '@shared/infra/http/app'
import request from 'supertest'

describe("Create Category Controller", async ()=>{
  await request(app).get("/cars/avaliable").expect(200)
})
