import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreatePlayListDto } from './dto/create-play-list.dto';
import { UpdatePlayListDto } from './dto/update-play-list.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { PlayList } from './play-list.entity';
import { Repository } from 'typeorm';
import { UsuariosService } from 'src/usuarios/usuarios.service';

@Injectable() 
export class PlayListsService {

  constructor( @InjectRepository(PlayList) private playlistsRepository : Repository<PlayList>,
  private usuariosService: UsuariosService) {}

  async crearPlaylis(playlist: CreatePlayListDto) {
    const userFound = await this.usuariosService.getUsuario(playlist.creadorId)

    if(!userFound) return new HttpException('User not found', HttpStatus.NOT_FOUND)
    
    const newPlaylist = this.playlistsRepository.create(playlist)
    return this.playlistsRepository.save(newPlaylist)
  }

  getPlaylists() {
    return this.playlistsRepository.find({
      relations: ['creador','canciones']
    })
  }
}