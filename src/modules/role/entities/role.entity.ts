
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn } from 'typeorm';
import { User_Role } from '../../user_role/entities/user_role.entity';

@Entity()
export class Role {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(type => User_Role, UserRoles => UserRoles.roles)
  @JoinColumn({name: 'id',referencedColumnName: 'role_id'})
  role: Role[];
}
