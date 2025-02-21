import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MovieNotes } from './entities/movie-notes.entity';
import { Repository } from 'typeorm';
import { CreateMovieNoteDto } from './dto/create-moves.dto';
import { UpdateMovieNoteDto } from './dto/update-moves.dto';

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

  async findOne(id: string) {
    return this.movieNoteRepository.findOneBy({ id });
  }

  async update(id: string, updateMovieNoteDto: UpdateMovieNoteDto) {
    const movieNote = await this.movieNoteRepository.findOneBy({ id });

    if (!movieNote) {
      throw new Error('Movie note not found');
    }

    return this.movieNoteRepository.save({
      ...updateMovieNoteDto,
      id,
      updateAt: new Date(),
    });
  }

  async delete(id: string): Promise<MovieNotes> {
    const movieNote = await this.movieNoteRepository.findOne({
      where: { id },
    });

    if (!movieNote) {
      throw new HttpException(
        { message: 'Movie note not found', error: 'Not Found' },
        HttpStatus.NOT_FOUND,
      );
    }
    await this.movieNoteRepository.softDelete(id);

    const deletedMovieNote = await this.movieNoteRepository.findOne({
      where: { id },
      withDeleted: true,
    });
    return deletedMovieNote;
  }
}
