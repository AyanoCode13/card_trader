import { Controller, Get } from '@nestjs/common';

@Controller('cards/mtg')
export class MtgController {
  @Get()
  getHello() {
    return 'Hello From App Mtg Controller';
  }
}
