import { AppController } from './app.controller';
import { AppDataSource } from './config/database/typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { MovieNotesModule } from './movie-notes/movie-notes.module';
import { MovieTagsModule } from './movie-tags/movie-tags.module';
import { AuthService } from './auth/auth.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(AppDataSource.options),
    UserModule,
    MovieNotesModule,
    MovieTagsModule,
  ],
  controllers: [AppController],
  providers: [AuthService],
})
export class AppModule {}
