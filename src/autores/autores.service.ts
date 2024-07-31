import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Autor } from './autor.entity';
import { Repository } from 'typeorm';
import { CreateAutorDto } from './dto/create-autor.dto';
import { UpdateAutorDto } from './dto/update-autor.dto';

@Injectable()
export class AutoresService {

    constructor(@InjectRepository(Autor) private autorRepository: Repository<Autor>) {}

    async crearAutor(autor: CreateAutorDto) {
        const autorFound = await this.autorRepository.findOne({
            where: {
                nombreArtistico: autor.nombreArtistico
            }
        });

        if (autorFound) {
            return new HttpException('Autor already exists', HttpStatus.CONFLICT)
        }

        const newAutor = this.autorRepository.create(autor)
        return this.autorRepository.save(newAutor);
    }
    
    async getAutores() {
        return await this.autorRepository.find({
            relations: ['canciones', 'albums']
        })
    }

    async getAutor(id: number) {
        const autorFound = await this.autorRepository.findOne({
            where: {
                id,
            },

            relations: ['canciones','albums']
        });

        if(!autorFound) {
            return new HttpException('Autor Id not found', HttpStatus.CONFLICT)
        }

        return autorFound;
    }

    async deleteAutor(id: number) {
        const autorFound = await this.autorRepository.findOne({
            where: {
                id,
            }
        });

        if(!autorFound) {
            return new HttpException('Autor not found', HttpStatus.NOT_FOUND)
        }

        return this.autorRepository.delete(id)
    }

    async updateAutor(id: number, autor: UpdateAutorDto) {
        const autorFound = await this.autorRepository.findOne({
            where: {
                id,
            }
        });

        if(!autorFound) {
            return new HttpException('Autor not found', HttpStatus.NOT_FOUND)
        }

        return this.autorRepository.update(id, autor)
    }
}
