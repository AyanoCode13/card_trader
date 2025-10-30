import { Module } from '@nestjs/common';
import { FabController } from './app.controller';
import { FabService } from './app.service';

@Module({
  imports: [],
  controllers: [FabController],
  providers: [FabService],
})
export class FabModule {}
