
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { User } from '../../user/entities/user.entity';
import { Journal } from '../../journal/entities/journal.entity'

@Entity()
export class User_Journal {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(type => User, users => users.user_j)
  @JoinColumn({name: 'user_id', referencedColumnName: 'id'})
  users: User_Journal;

  @ManyToOne(type => Journal, journals => journals.journal)
  @JoinColumn({name: 'journal_id', referencedColumnName: 'id'})
  journals: User_Journal;
}
