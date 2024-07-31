import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Genero } from './genero.entity';
import { CreateGeneroDto } from './dto/create-genero.dto';
import { UpdateGeneroDto } from './dto/update-genero.dto';

@Injectable()
export class GenerosService {
  constructor(@InjectRepository(Genero) private generoRepository: Repository<Genero>) {}

  async crearGenero(genero: CreateGeneroDto) {
    const generoFound = await this.generoRepository.findOne({
      where: {
        nombre: genero.nombre,
      }
    });

    if (generoFound) {
      return new HttpException('Genero already exists', HttpStatus.CONFLICT)
    }

    const newGenero = this.generoRepository.create(genero)
    return this.generoRepository.save(newGenero);
  }
  
  getGeneros() {
    return this.generoRepository.find({
      relations: ['canciones','albums']
    });
  }

  async getGenero(id: number) {
    const generoFound = await this.generoRepository.findOne({
      where: {
        id,
      },
      relations: ['canciones','albums']
    });

    if(!generoFound) {
      return new HttpException('Genero not found', HttpStatus.NOT_FOUND)
    }

    return generoFound;
  }

  async updateGenero(id: number, genero: UpdateGeneroDto) {
    const playlistFound = await this.generoRepository.findOne({
      where: {
        id,
      }
    });

    if(!playlistFound) {
      return new HttpException('playList not found', HttpStatus.NOT_FOUND)
    }

    return this.generoRepository.update(id, genero);
  }

  async deleteGenero(id: number) {
    const generoFound = await this.generoRepository.findOne({
      where: {
        id,
      }
    });

    if(!generoFound) {
      return new HttpException('playList not found', HttpStatus.NOT_FOUND)
    }

    return this.generoRepository.delete(id);
  }
}