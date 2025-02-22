import { AppController } from './app.controller';
import { AppDataSource } from './config/database/typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { MovieNotesModule } from './movie-notes/movie-notes.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(AppDataSource.options),
    UserModule,
    MovieNotesModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
