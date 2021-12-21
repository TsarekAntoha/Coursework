import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { User_Settings } from './entities/user_settings.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User_Settings])],
  controllers: [],
  providers: [],
})
export class User_SettingsModule {}
