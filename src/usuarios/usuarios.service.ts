import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from './usuario.entity';
import { Repository } from 'typeorm';
import { CreateProfileDto } from './dto/create-perfil.dto';
import { Profile } from './profile.entity';

@Injectable()
export class UsuariosService {

  constructor(
    @InjectRepository(Usuario) private usuarioRepository: Repository<Usuario>,
    @InjectRepository(Profile) private profileRepository: Repository<Profile>,
  ) {}

  async crearUsuario(usuario: CreateUsuarioDto) {
    const userFound = await this.usuarioRepository.findOne({
      where: {
        usuario: usuario.usuario,
      }
    });

    if (userFound) {
      return new HttpException('This User already exists', HttpStatus.CONFLICT)
    }

    const newUser = this.usuarioRepository.create(usuario)
    return this.usuarioRepository.save(newUser)
  }

  getUsuarios() {
    return this.usuarioRepository.find({
      relations: ['playlists', 'profile']
    })
  }

  async getUsuario(id: number) {
    const userFound = await this.usuarioRepository.findOne({
      where: {
        id,
      },
      relations: ['playlists', 'profile']
    });

    if(!userFound) {
      return new HttpException('This user not found', HttpStatus.CONFLICT)
    }

    return userFound;
  }

  async updateUsuario(id: number, usuario: UpdateUsuarioDto) {
    const userFound = await this.usuarioRepository.findOne({
      where: {
        id,
      }
    });

    if(!userFound) {
      return new HttpException('This user not found', HttpStatus.CONFLICT)
    }

    return this.usuarioRepository.update(id, usuario)
  }

  async deleteUser(id: number) {
    const playlistFound = await this.usuarioRepository.findOne({
      where: {
        id,
      }
    });

    if(!playlistFound) {
      return new HttpException('playList not found', HttpStatus.NOT_FOUND)
    }

    return this.usuarioRepository.delete(id);
  }

  async createProfile(id: number, profile: CreateProfileDto) {
    const userFound = await this.usuarioRepository.findOne({
      where: {
        id,
      },
    });

    if(!userFound) {
      return new HttpException('User not found', HttpStatus.NOT_FOUND)
    }
    
    const newProfile = this.profileRepository.create(profile)
    const savedProfile = await this.profileRepository.save(newProfile)
    userFound.profile = savedProfile

    return this.usuarioRepository.save(userFound)
  }

}
