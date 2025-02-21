import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { MovieNotesService } from './movie-notes.service';
import { CreateMovieNoteDto } from './dto/create-moves.dto';
import { UpdateMovieNoteDto } from './dto/update-moves.dto';

@Controller('movie-notes')
export class MovieNotesController {
  constructor(private readonly movieNotesService: MovieNotesService) {}

  @Post()
  create(@Body() createMovieNoteDto: CreateMovieNoteDto) {
    const userId = createMovieNoteDto.userId;
    return this.movieNotesService.create(createMovieNoteDto, userId);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.movieNotesService.findOne(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateMovieNoteDto: UpdateMovieNoteDto,
  ) {
    return this.movieNotesService.update(id, updateMovieNoteDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.movieNotesService.delete(id);
  }
}
