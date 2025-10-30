import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller('cards/mtg')
export class MtgController {
  constructor(@Inject(process.env.FAB_MICROSERVICE_NAME) private readonly mtgMicroservice:ClientProxy){}
  @Get()
  getHello() {
    this.mtgMicroservice.emit({cmd:'getHello'},{})
    return 'Hello From App Mtg Controller';
  }
}
