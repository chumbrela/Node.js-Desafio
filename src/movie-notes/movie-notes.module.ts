import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Type } from 'class-transformer';
import { MovieNotes } from './entities/movie-notes.entity';
import { MovieNotesController } from './movie-notes.controller';
import { MovieNotesService } from './movie-notes.service';

@Module({
  imports: [TypeOrmModule.forFeature([MovieNotes])],
  controllers: [MovieNotesController],
  providers: [MovieNotesService],
})
export class MovieNotesModule {}
