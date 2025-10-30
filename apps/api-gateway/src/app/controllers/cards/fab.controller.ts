import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';


@Controller("cards/fab")
export class FabController {
    constructor(@Inject(process.env.FAB_MICROSERVICE_NAME) private readonly fabMicroservice:ClientProxy){}
    @Get()
    getHello() {
        this.fabMicroservice.emit({cmd:"getHello"},{});
        return 'Hello From App Fab Controller'
    }
}