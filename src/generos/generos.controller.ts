import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { GenerosService } from './generos.service';
import { CreateGeneroDto } from './dto/create-genero.dto';
import { UpdateGeneroDto } from './dto/update-genero.dto';


@Controller('generos')
export class GenerosController {
  constructor(private readonly generosService: GenerosService) {}

  @Post('crear')
  crearGenero(@Body() genero: CreateGeneroDto) {
    return this.generosService.crearGenero(genero);
  }

  @Get('obtener/all')
  getGeneros() {
    return this.generosService.getGeneros();
  }

  @Get('obtener/:id')
  getGenero(@Param('id') id: number) {
    return this.generosService.getGenero(id);
  }

  @Patch('actualizar/:id')
  updateGenero(@Param('id', ParseIntPipe) id: number, @Body() genero: UpdateGeneroDto) {
    return this.generosService.updateGenero(id, genero);
  }

  @Delete('eliminar/:id')
  deleteGenero(@Param('id') id: number) {
    return this.generosService.deleteGenero(id);
  }
}