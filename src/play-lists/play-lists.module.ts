import { Module } from '@nestjs/common';
import { PlayListsService } from './play-lists.service';
import { PlayListsController } from './play-lists.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlayList } from './play-list.entity';
import { UsuariosModule } from 'src/usuarios/usuarios.module';

@Module({
  imports: [TypeOrmModule.forFeature([PlayList]), UsuariosModule],
  controllers: [PlayListsController],
  providers: [PlayListsService],
})
export class PlayListsModule {}
