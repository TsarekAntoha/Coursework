
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { User } from '../../user/entities/user.entity';
import { Role } from '../../role/entities/role.entity'

@Entity()
export class User_Role {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(type => User, users => users.user_r)
  @JoinColumn({name: 'user_id', referencedColumnName: 'id'})
  users: User_Role;

  @ManyToOne(type => Role, roles => roles.role)
  @JoinColumn({name: 'role_id', referencedColumnName: 'id'})
  roles: User_Role;
}
