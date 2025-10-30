import { Controller, Get } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { FabService } from './app.service';

@Controller()
export class FabController {
  constructor(private readonly appService: FabService) {}
  @EventPattern({cmd:'getHello'})
  gethello() {
    return "hello form fab microservice"
  }

  @Get()
  getData() {
    return this.appService.getData();
  }
}
