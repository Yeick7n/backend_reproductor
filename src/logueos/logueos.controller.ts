import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LogueosService } from './logueos.service';
import { CreateLogueoDto } from './dto/create-logueo.dto';
import { UpdateLogueoDto } from './dto/update-logueo.dto';

@Controller('logueos')
export class LogueosController {
  constructor(private readonly logueosService: LogueosService) {}

  @Post()
  create(@Body() createLogueoDto: CreateLogueoDto) {
    return this.logueosService.create(createLogueoDto);
  }

  @Get()
  findAll() {
    return this.logueosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.logueosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLogueoDto: UpdateLogueoDto) {
    return this.logueosService.update(+id, updateLogueoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.logueosService.remove(+id);
  }
}
