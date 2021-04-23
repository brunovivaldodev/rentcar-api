import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import {v4 as uuidV4} from 'uuid'
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

  @CreateDateColumn()
  created_at : Date;

  @UpdateDateColumn()
  updated_at : Date;

}


export default User;
