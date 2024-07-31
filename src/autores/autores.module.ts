import { Module } from '@nestjs/common';
import { AutoresService } from './autores.service';
import { AutoresController } from './autores.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Autor } from './autor.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Autor])],
  providers: [AutoresService],
  controllers: [AutoresController],
  exports: [AutoresService]
})
export class AutoresModule {}
