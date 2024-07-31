import { Injectable } from '@nestjs/common';
import { CreateLogueoDto } from './dto/create-logueo.dto';
import { UpdateLogueoDto } from './dto/update-logueo.dto';

@Injectable()
export class LogueosService {
  create(createLogueoDto: CreateLogueoDto) {
    return 'This action adds a new logueo';
  }

  findAll() {
    return `This action returns all logueos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} logueo`;
  }

  update(id: number, updateLogueoDto: UpdateLogueoDto) {
    return `This action updates a #${id} logueo`;
  }

  remove(id: number) {
    return `This action removes a #${id} logueo`;
  }
}
