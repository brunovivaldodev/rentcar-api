import Category from '../model/Category'

interface ICreateCategoryDTO {
    name :string,
    description : string
}

class CategoryRepository{

    private categories : Category[]

    constructor(){
        this.categories = []
    }

    public create({name,description} : ICreateCategoryDTO) : Category{

        let category = this.findByName(name)
        if (category){
            throw new Error('Categoria Já Existe')
        }
        
        category = new Category()

        Object.assign(category,{
            name,
            description,
            created_at : new Date()
        })
    
        this.categories.push(category)
        return category
    }

    index () : Category[]{
        return this.categories
    }

    findByName(name: string) : Category | undefined{
        const category = this.categories.find((category) => category.name ===name)

        return category

    }
    
}

export default CategoryRepository