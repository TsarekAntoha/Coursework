
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn } from 'typeorm';
import { User_Role } from '../../user_role/entities/user_role.entity';
import { User_Journal } from '../../user_journal/entities/user_journal.entity';
import { User_Settings } from '../../user_settings/entities/user_settings.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: number;

  @Column()
  email: string;

  @OneToMany(type => User_Role, UserRole => UserRole.users )
  @JoinColumn({ name: 'id', referencedColumnName: 'user_id'})
  user_r: User[]

  @OneToMany(type => User_Journal, UserJournal => UserJournal.users)
  @JoinColumn({name:'id',referencedColumnName:'user_id'})
  user_j: User[]

  @OneToMany(type => User_Settings, UserSettings => UserSettings.settings)
  @JoinColumn({name:'id',referencedColumnName:'user_id'})
  setting: User[];
}
