import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { User_Journal } from './entities/user_journal.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User_Journal])],
  controllers: [],
  providers: [],
})
export class User_JournalModule {}
