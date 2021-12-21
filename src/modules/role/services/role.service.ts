
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Role } from '../entities/role.entity';

@Injectable()
export class RoleService {
  constructor(
    @InjectRepository(Role)
    private roleRepository: Repository<Role>,
  ) {}

  findAll(): Promise<Role[]> {
    return this.roleRepository.find();
  }

  findOne(id: string): Promise<Role> {
    return this.roleRepository.findOne(id);
  }

  create(role: Role): Promise<Role> {
      return this.roleRepository.save(role);
  }

  update(role: Role): Promise<Role> {
      return this.roleRepository.save(role);
  }

  async remove(id: string): Promise<void> {
    await this.roleRepository.delete(id);
  }
}
