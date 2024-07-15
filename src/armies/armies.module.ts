import { Module } from '@nestjs/common';
import { ArmiesController } from './armies.controller';

@Module({
  controllers: [ArmiesController]
})
export class ArmiesModule {}
