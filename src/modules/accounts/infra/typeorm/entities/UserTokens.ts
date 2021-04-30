import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import User from "./User";

@Entity("users_tokens")
class UserTokens{
  @PrimaryGeneratedColumn("uuid")
  id : string;

  @Column()
  refresh_token : string;
  @ManyToOne(() => User)
  @JoinColumn({name : "user_id"})
  @Column()
  user_id : string;

  @Column()
  expires_date : Date;

  @CreateDateColumn()
  created_at : Date;

  @UpdateDateColumn()
  updated_at :Date
}


export default UserTokens
