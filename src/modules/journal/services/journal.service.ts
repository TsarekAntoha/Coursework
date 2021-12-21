
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Journal } from '../entities/journal.entity';

@Injectable()
export class JournalService {
  constructor(
    @InjectRepository(Journal)
    private journalRepository: Repository<Journal>,
  ) {}

  findAll(): Promise<Journal[]> {
    return this.journalRepository.find();
  }

  findOne(id: string): Promise<Journal> {
    return this.journalRepository.findOne(id);
  }

  create(journal: Journal): Promise<Journal> {
      return this.journalRepository.save(journal);
  }

  update(journal: Journal): Promise<Journal> {
      return this.journalRepository.save(journal);
  }

  async remove(id: string): Promise<void> {
    await this.journalRepository.delete(id);
  }
}
