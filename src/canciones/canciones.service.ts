import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cancion } from './cancion.entity';
import { Repository } from 'typeorm';
import { CreateCancionDto } from './dto/create-cancion.dto';
import { UpdateCancionDto } from './dto/update-cancion.dto';
import { UsuariosService } from 'src/usuarios/usuarios.service';

@Injectable()
export class CancionesService {

    constructor(
        @InjectRepository(Cancion) private cancionRepository: Repository<Cancion>,
        private usuariosService: UsuariosService
    ){}

    async crearCancion(cancion: CreateCancionDto) {
        const userFound = await this.usuariosService.getUsuario(cancion.autorId)

        if(!userFound) return new HttpException('User not found', HttpStatus.NOT_FOUND)

        const newCancion = this.cancionRepository.create(cancion)
        return this.cancionRepository.save(newCancion)
    }

    getCanciones() {
        return this.cancionRepository.find({
            relations: ['autor','album','genero']
        })
    }

    getCancion(id: number) {
        const cancionFound = this.cancionRepository.findOne({ 
            where: {
                id,
            },
            relations: ['autor','album','genero','playlists']
        })

        if(!cancionFound) {
            return new HttpException('Cancion Not Found', HttpStatus.NOT_FOUND)
        }

        return cancionFound;
    }

    async deleteCancion(id: number) {
        const cancionFound = await this.cancionRepository.findOne({
            where: {
                id,
            }
        });

        if (!cancionFound) {
            return new HttpException('Cancion not found', HttpStatus.NOT_FOUND)
        }
        
        return  this.cancionRepository.delete(id)
    }

    async updateCancion(id: number, cancion: UpdateCancionDto) {
        const cancionFound = await this.cancionRepository.findOne({
            where: {
                id,
            }
        });

        if (!cancionFound) {
            return new HttpException('Cancion not found', HttpStatus.NOT_FOUND)
        }
        return  this.cancionRepository.update(id, cancion)
    }
}
