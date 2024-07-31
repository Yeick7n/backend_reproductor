import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { PlayListsService } from './play-lists.service';
import { CreatePlayListDto } from './dto/create-play-list.dto';
import { UpdatePlayListDto } from './dto/update-play-list.dto';

@Controller('play-lists')
export class PlayListsController {

  constructor(private playListsService: PlayListsService) {}

  @Post()
  crearPlaylist(@Body() playList: CreatePlayListDto) {
    return this.playListsService.crearPlaylis(playList);
  }

  @Get()
  getPlaylists() {
    return this.playListsService.getPlaylists();
  }
}
