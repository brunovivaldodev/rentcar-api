import {v4 as uuidV4} from 'uuid'
import {Column, Entity, PrimaryColumn,CreateDateColumn,UpdateDateColumn} from 'typeorm'

@Entity("categories")
class Category{

    @PrimaryColumn()
    id : string;

    @Column()
    name : string;

    @Column()
    description : string;

    @CreateDateColumn()
    created_at :Date

    @UpdateDateColumn()
    updated_at : Date


    constructor(){
        if(!this.id){
            this.id = uuidV4()
        }
    }
}

export default Category
