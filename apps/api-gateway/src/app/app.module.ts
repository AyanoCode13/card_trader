import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { FabController } from './controllers/cards/fab.controller';
import { MtgController } from './controllers/cards/mtg.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    ClientsModule.register([
      {
        name:'FAB_MICROSERVICE',
        transport: Transport.TCP,
        options: {
          port: parseInt(process.env.FAB_MICROSERVICE_PORT)
        }
      },
      {
        name:'MTG_MICROSERVICE',
        transport: Transport.TCP,
        options: {
          port: parseInt(process.env.MTG_MICROSERVICE_PORT)
        }
      }
    ]),
  ],
  controllers: [MtgController, FabController],
  providers: []
})
export class AppModule {}
