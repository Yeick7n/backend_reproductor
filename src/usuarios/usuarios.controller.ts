import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
// import { Usuario } from './usuario.entity';
// import { profile } from 'console';
import { CreateProfileDto } from './dto/create-perfil.dto';

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Post('crear')
  crearUsuario(@Body() Usuario: CreateUsuarioDto) {
    return this.usuariosService.crearUsuario(Usuario);
  }

  @Get('obtener/all')
  findgetUsuarios() {
    return this.usuariosService.getUsuarios();
  }

  @Get('obtener/:id')
  getUsuario(@Param('id', ParseIntPipe) id: number) {
    return this.usuariosService.getUsuario(id);
  }

  @Patch('actualizar/:id')
  updateUsuario(@Param('id', ParseIntPipe) id: number, @Body() user: UpdateUsuarioDto) {
    return this.usuariosService.updateUsuario(id, user);
  }

  @Delete('eliminar/:id')
  deleteUser(@Param('id', ParseIntPipe) id: number) {
    return this.usuariosService.deleteUser(id);
  }

  @Post('crear/profile/:id')
  createProfile(
    @Param('id', ParseIntPipe) id: number, 
    @Body() perfil: CreateProfileDto) {
    return this.usuariosService.createProfile(id, perfil)
  }
}
