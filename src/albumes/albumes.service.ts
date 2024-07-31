import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Album } from './album.entity';
import { Repository } from 'typeorm';
import { CreateAlbumDto } from './dto/create-album.dto';
import { UpdateAlbumDto } from './dto/update-album.dto';

@Injectable()
export class AlbumesService {

    constructor(
        @InjectRepository(Album) private albumRepository: Repository<Album>
    ) {}

    async crearAlbum(album: CreateAlbumDto) {
        const albumFound = await this.albumRepository.findOne({
            where: {
                nombre: album.nombre,
            }
        })
        
        if(albumFound) {
            return new HttpException('Nombre de album ya existe', HttpStatus.CONFLICT)
        }

        const newAlbum = this.albumRepository.create(album);
        return this.albumRepository.save(newAlbum);
    }

    getAlbumes() {
        return this.albumRepository.find({
            relations: ['autor','genero','canciones']
        })
    }

    async getAlbum(id: number) {
        const albumFound = await this.albumRepository.findOne({
            where: {
                id,
            },

            relations: ['autor','genero','canciones']
        });

        if (!albumFound) {
            return new HttpException('Album not found', HttpStatus.NOT_FOUND);
        }

        return albumFound;
    }

    async deleteAlbum(id: number) {
        const albumFound = await this.albumRepository.findOne({
            where: {
                id,
            }
        });

        if(!albumFound) {
            return new HttpException('Album ID not found', HttpStatus.NOT_FOUND);
        }

        return this.albumRepository.delete(albumFound);
    }

    async updateAlbum(id: number, album: UpdateAlbumDto) {
        const albumFound = await this.albumRepository.findOne({
            where: {
                id,
            }
        });

        if(!albumFound) {
            return new HttpException('Album ID not found', HttpStatus.NOT_FOUND);
        }

        return this.albumRepository.update(id, album);
    }
}
