import { Module } from '@nestjs/common';
import { CancionesService } from './canciones.service';
import { CancionesController } from './canciones.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cancion } from './cancion.entity';
// import { AutoresModule } from 'src/autores/autores.module';
import { UsuariosModule } from 'src/usuarios/usuarios.module';

@Module({
  imports: [TypeOrmModule.forFeature([Cancion]), UsuariosModule],
  providers: [CancionesService],
  controllers: [CancionesController]
})
export class CancionesModule {}
