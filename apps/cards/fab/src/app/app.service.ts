import { Injectable } from '@nestjs/common';

@Injectable()
export class FabService {
  getData(): { message: string } {
    return { message: 'Hello API' };
  }
}
