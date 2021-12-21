import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { User_Role } from './entities/user_role.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User_Role])],
  controllers: [],
  providers: [],
})
export class User_RoleModule {}
