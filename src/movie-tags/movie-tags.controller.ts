import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { MovieTagsService } from "./movie-tags.service";
import { CreateMovieTagsDto } from "./dto/create-movie-tags.dto";

@Controller('movie-tags')
export class MovieTagsController {
    constructor( private readonly movieTagsService: MovieTagsService) {}

@Post()
create(@Body() createMovieTagsDto: CreateMovieTagsDto) {
  return this.movieTagsService.create(createMovieTagsDto);
}

@Get(':id')
async findOne(@Param('id') id: string) {
  return this.movieTagsService.findOneById(id);
}

@Put(':id')
async update(@Param('id') id: string, @Body() updateMovieTagsDto: CreateMovieTagsDto) {
  return this.movieTagsService.update(id, updateMovieTagsDto);
}

@Delete(':id')
async delete(@Param('id') id: string) {
  return this.movieTagsService.delete(id);
}
}