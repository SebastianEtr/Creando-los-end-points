import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SwordController } from './sword/sword.controller';

@Module({
  imports: [],
  controllers: [AppController, SwordController],
  providers: [AppService],
})
export class AppModule {}
