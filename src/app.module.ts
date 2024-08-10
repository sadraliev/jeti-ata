import { Module } from '@nestjs/common';
import { AppController } from './genealogy.controller';
import { AppService } from './genealogy.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
