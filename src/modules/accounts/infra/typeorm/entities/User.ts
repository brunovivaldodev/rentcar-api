import Specification from '@modules/cars/infra/typeorm/entities/Specification';
import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
@Entity('users')
class User{

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name : string;

  @Column()
  email : string

  @Column()
  password : string;

  @Column()
  driver_license : string;

  @Column()
  isAdmin : boolean;

  @Column()
  avatar : string

  @ManyToMany(() => Specification)
  @JoinTable(({
    name : 'specifications_cars',
    joinColumns : [{name : "car_id"}],
    inverseJoinColumns : [{name : 'specification_id'}]
  }))
  specifications : Specification[]


  @CreateDateColumn()
  created_at : Date;

  @UpdateDateColumn()
  updated_at : Date;

}


export default User;
