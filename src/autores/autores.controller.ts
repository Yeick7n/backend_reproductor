import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { AutoresService } from './autores.service';
import { CreateAutorDto } from './dto/create-autor.dto';
import { UpdateAutorDto } from './dto/update-autor.dto';

@Controller('autores')
export class AutoresController {

    constructor(private autoresService: AutoresService) {}

    @Post('crear')
    crearAutor(@Body() newAutor: CreateAutorDto) {
        return this.autoresService.crearAutor(newAutor);
    }

    @Get('obtener/all')
    getAutores() {
        return this.autoresService.getAutores();
    }

    @Get('obtener/:id')
    getAutor(@Param('id', ParseIntPipe) id:number) {
        return this.autoresService.getAutor(id);
    }

    @Delete('eliminar/:id')
    deleteAutor(@Param('id', ParseIntPipe) id: number) {
        return this.autoresService.deleteAutor(id)
    }

    @Patch('actualizar/:id')
    updateAutor(@Param('id', ParseIntPipe) id:number, @Body() autor: UpdateAutorDto) {
        return this.autoresService.updateAutor(id, autor)
    }
}
