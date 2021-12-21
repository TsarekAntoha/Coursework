import { Controller, Get, Post, Delete, Param, Body, Put, BadRequestException, NotFoundException } from '@nestjs/common';
import { Role } from '../entities/role.entity';
import { RoleService } from '../services/role.service';
import { CreateDto, UpdateDto } from './role.dto';

@Controller('rest/role')
export class RoleController {

  constructor(private readonly RoleService: RoleService){
  }

  @Get()
  getAllAction(): Promise<Role[]> {
    return this.RoleService.findAll();
  }

  @Get(':id')
  async getOneAction(@Param('id') id: string): Promise<Role> {
    const role = await this.RoleService.findOne(id);
    if( role === undefined ){
      throw new NotFoundException(`Role with id=${id} does not exist`);
    }
    return role;
  }

  @Post()
  createAction(@Body() role: CreateDto): Promise<Role>{
    const rolebuff = new Role();
    rolebuff.name = role.name;
    return this.RoleService.create(rolebuff);
  }

  @Put(':id')
  async updateAction(
    @Param('id') id: string,
    @Body() updatedto: UpdateDto
    ): Promise<Role> {
      const role = await this.RoleService.findOne(id);
      if(role === undefined){
        throw new NotFoundException(`Role with id=${id} does not exist`);
      }
      role.name = updatedto.name;
      return this.RoleService.update(role);
  }

  @Delete(':id')
  deleteAction(@Param('id') id: string): Promise<void>{
    return this.RoleService.remove(id);
  }
}
