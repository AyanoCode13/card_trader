import { Controller, Get } from '@nestjs/common';


@Controller("cards/fab")
export class FabController {
    @Get()
    getHello() {
        return 'Hello From App Fab Controller'
    }
}