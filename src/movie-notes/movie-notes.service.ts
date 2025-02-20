import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MovieNotes } from './entities/movie-notes.entity';
import { Repository } from 'typeorm';
import { CreateMovieNoteDto } from './dto/create-moves.dto';

@Injectable()
export class MovieNotesService {
  constructor(
    @InjectRepository(MovieNotes)
    private readonly movieNoteRepository: Repository<MovieNotes>,
  ) {}

  async create(createMovieNoteDto: CreateMovieNoteDto, userId: string) {
    const movieNote = this.movieNoteRepository.create({
      ...createMovieNoteDto,
      userId: userId,
    });
    return this.movieNoteRepository.save(movieNote);
  }
}
