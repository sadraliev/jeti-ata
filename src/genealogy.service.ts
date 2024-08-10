import { Injectable } from '@nestjs/common';

@Injectable()
export class GenealogyService {
  getHello(): string {
    return 'Hello World!';
  }
}
