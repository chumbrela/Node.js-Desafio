import { Body, Controller, Post } from '@nestjs/common';
import { MovieNotesService } from './movie-notes.service';
import { CreateMovieNoteDto } from './dto/create-moves.dto';

@Controller('movie-notes')
export class MovieNotesController {
  constructor(private readonly movieNotesService: MovieNotesService) {}

  @Post()
  create(@Body() createMovieNoteDto: CreateMovieNoteDto) {
    const userId = createMovieNoteDto.userId;
    return this.movieNotesService.create(createMovieNoteDto, userId);
  }
}
