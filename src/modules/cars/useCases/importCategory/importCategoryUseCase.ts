import fs from 'fs'
import csvParse from 'csv-parse'
import ICategoryRepository from '@modules/cars/repositories/ICategoriesRepository'

interface IImportCategory{
  name : string,
  description : string
}

class ImportCategoryUseCase {
  constructor(private categoriesRepository: ICategoryRepository)  { }


  loadCategory(file: Express.Multer.File) : Promise<IImportCategory[]> {
   return new Promise((resolve,reject)=>{
    const stream = fs.createReadStream(file.path)

    const categories : IImportCategory[] = []

    const parseFile = csvParse()

    stream.pipe(parseFile)

    parseFile.on("data", async (line) => {
      const [name,description] = line
      categories.push({name,description})
    })
    .on("end",()=>{
      fs.promises.unlink(file.path)
      resolve(categories)
    })
    .on("error",(err)=>{
      reject(err)
    })
   })
  }

  public async execute(file : Express.Multer.File): Promise<void>{
    const categories = await this.loadCategory(file)

    categories.map(async category =>{
      const {name,description} = category

      const existsCategory = this.categoriesRepository.findByName(name)

      if(!existsCategory){
        this.categoriesRepository.create({
          name,description
        })
      }
    })
}
}


export default ImportCategoryUseCase
