
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn } from 'typeorm';
import { User_Journal } from '../../user_journal/entities/user_journal.entity';

@Entity()
export class Journal {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  image: string;

  @OneToMany(type => User_Journal, UserJournals => UserJournals.journals)
  @JoinColumn({name: 'id',referencedColumnName: 'journal_id'})
  journal: Journal[];
}
