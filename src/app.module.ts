import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DeveloperModule } from './developer/developer.module';

@Module({
  imports: [DeveloperModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
