import { Module } from '@nestjs/common';
import { LogueosService } from './logueos.service';
import { LogueosController } from './logueos.controller';

@Module({
  controllers: [LogueosController],
  providers: [LogueosService],
})
export class LogueosModule {}
