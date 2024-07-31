import { Module } from '@nestjs/common';
import { AlbumesController } from './albumes.controller';
import { AlbumesService } from './albumes.service';
import { TypeOrmModule } from '@nestjs/typeorm'
import { Album } from './album.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Album])],
  controllers: [AlbumesController],
  providers: [AlbumesService]
})
export class AlbumesModule {}
