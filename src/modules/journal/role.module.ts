import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { JournalController } from './controllers/journal.controller';
import { Journal } from './entities/journal.entity';
import { JournalService } from './services/journal.service';

@Module({
  imports: [TypeOrmModule.forFeature([Journal])],
  controllers: [JournalController],
  providers: [JournalService],
})
export class JournalModule {}
