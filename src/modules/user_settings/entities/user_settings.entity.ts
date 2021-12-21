
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { User } from '../../user/entities/user.entity';

@Entity()
export class User_Settings {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
  
  @Column()
  surname: string;

  @ManyToOne(type => User, user_s => user_s.setting)
  @JoinColumn({name: 'user_id', referencedColumnName: 'id'})
  settings: User_Settings;
}
