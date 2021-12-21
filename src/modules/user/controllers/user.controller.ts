import { Controller, Get, Post, Delete, Param, Body, Put, NotFoundException } from '@nestjs/common';
import { User } from '../entities/user.entity';
import { UserService } from '../services/user.service';
import { CreateDto, UpdateDto } from './user.dto';

@Controller('rest/user')
export class UserController {

  constructor(private readonly UserService: UserService){
  }

  @Get()
  getAllAction(): Promise<User[]> {
    return this.UserService.findAll();
  }

  @Get(':id')
  async getOneAction(@Param('id') id: string): Promise<User> {
    const user = await this.UserService.findOne(id);
    if( user === undefined ){
      throw new NotFoundException(`User with id=${id} does not exist`);
    }
    return user;
  }

  @Post()
  createAction(@Body() user: CreateDto): Promise<User>{
    const userbuff = new User();
    userbuff.username = user.username;
    userbuff.password = user.password;
    userbuff.email = user.email;
    return this.UserService.create(userbuff);
  }

  @Put(':id')
  async updateAction(
    @Param('id') id: string,
    @Body() updatedto: UpdateDto
    ): Promise<User> {
      const user = await this.UserService.findOne(id);
      if(user === undefined){
        throw new NotFoundException(`User with id=${id} does not exist`);
      }
      user.username = updatedto.username;
      user.password = updatedto.password;
      user.email = updatedto.email;
      return this.UserService.update(user);
  }

  @Delete(':id')
  deleteAction(@Param('id') id: string): Promise<void>{
    return this.UserService.remove(id);
  }
}
