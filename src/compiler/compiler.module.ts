import { Module } from '@nestjs/common';
import { CompilerService } from './compiler.service';

@Module({
  providers: [CompilerService],
})
export class CompilerModule {}
