import { Controller, Get } from '@nestjs/common';
import { GenealogyService } from './genealogy.service';

@Controller()
export class GenealogyController {
  constructor(private readonly genealogyService: GenealogyService) {}

  @Get()
  getHello(): string {
    return;
  }
}
