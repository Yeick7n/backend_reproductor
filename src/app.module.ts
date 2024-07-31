import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CancionesModule } from './canciones/canciones.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AlbumesModule } from './albumes/albumes.module';
import { AutoresModule } from './autores/autores.module';
import { PlayListsModule } from './play-lists/play-lists.module';
import { GenerosModule } from './generos/generos.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { LogueosModule } from './logueos/logueos.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '1234567890',
      database: 'reproductor_musica',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true
    }),
    CancionesModule,
    AlbumesModule,
    AutoresModule,
    PlayListsModule,
    GenerosModule,
    UsuariosModule,
    LogueosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
