import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): { ping: string } {
    return { ping: 'pong' };
  }
}
