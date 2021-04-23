import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import {v4 as uuidV4} from 'uuid'

@Entity("specifications")
class Specification {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;
  @Column()
  description: string;
  @CreateDateColumn()
  created_at: Date
  @UpdateDateColumn()
  updated_at : Date

}

export default Specification;
