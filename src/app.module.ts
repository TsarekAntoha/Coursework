import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { RoleModule } from './modules/role/role.module';
import { JournalModule } from './modules/journal/role.module';
import { User_RoleModule } from './modules/user_role/user_role.module';
import { User_JournalModule } from './modules/user_journal/user_journal.module';
import { TypeOrmModule } from '@nestjs/typeorm'
import { User_SettingsModule } from './modules/user_settings/user_settings.module';

@Module({
  imports: [UserModule, RoleModule, User_RoleModule, JournalModule, User_JournalModule, User_SettingsModule, TypeOrmModule.forRoot()],
  controllers: [],
  providers: [],
})
export class AppModule {}
