import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { AlbumesService } from './albumes.service';
import { CreateAlbumDto } from './dto/create-album.dto';
import { UpdateAlbumDto } from './dto/update-album.dto';


@Controller('albumes')
export class AlbumesController {

    constructor(
        private albumesService: AlbumesService
    ) {}

    @Post('crear')
    crearAlbum(@Body() newAlbum: CreateAlbumDto) {
        return this.albumesService.crearAlbum(newAlbum);
    }

    @Get('obtener/all')
    getAlbumes() {
        return this.albumesService.getAlbumes();
    }

    @Get('obtener/:id')
    getAlbum(@Param('id', ParseIntPipe) id: number) {
        return this.albumesService.getAlbum(id)
    }

    @Delete('eliminar/:id')
    deleteAlbum(@Param('id', ParseIntPipe) id: number) {
        return this.albumesService.deleteAlbum(id)
    }

    @Patch('actualizar/:id')
    updateAlbum(@Param('id', ParseIntPipe) id: number, @Body() album: UpdateAlbumDto) {
        return this.albumesService.updateAlbum(id, album)
    }
}
