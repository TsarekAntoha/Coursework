import { Controller, Get, Post, Delete, Param, Body, Put, NotFoundException } from '@nestjs/common';
import { Journal } from '../entities/journal.entity';
import { JournalService } from '../services/journal.service';
import { CreateDto, UpdateDto } from './journal.dto';

@Controller('rest/journal')
export class JournalController {

  constructor(private readonly JournalService: JournalService){
  }

  @Get()
  getAllAction(): Promise<Journal[]> {
    return this.JournalService.findAll();
  }

  @Get(':id')
  async getOneAction(@Param('id') id: string): Promise<Journal> {
    const journal = await this.JournalService.findOne(id);
    if( journal === undefined ){
      throw new NotFoundException(`Journal with id=${id} does not exist`);
    }
    return journal;
  }

  @Post()
  createAction(@Body() journal: CreateDto): Promise<Journal>{
    const journalbuff = new Journal();
    journalbuff.name = journal.name;
    journalbuff.image = journal.image;
    return this.JournalService.create(journalbuff);
  }

  @Put(':id')
  async updateAction(
    @Param('id') id: string,
    @Body() updatedto: UpdateDto
    ): Promise<Journal> {
      const journal = await this.JournalService.findOne(id);
      if(journal === undefined){
        throw new NotFoundException(`Journal with id=${id} does not exist`);
      }
      journal.name = updatedto.name;
      journal.image = updatedto.image;
      return this.JournalService.update(journal);
  }

  @Delete(':id')
  deleteAction(@Param('id') id: string): Promise<void>{
    return this.JournalService.remove(id);
  }
}
