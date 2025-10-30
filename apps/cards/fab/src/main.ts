/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { FabModule } from './app/app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
   const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    FabModule,
    {
      transport: Transport.TCP,
      options: {
        port:4000
      }
    },
  );
  await app.listen();
  Logger.log(
    `🚀 Fab Microservice is running on: http://localhost:4000`
  );
}

bootstrap();
