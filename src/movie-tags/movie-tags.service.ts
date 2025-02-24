import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { MovieTags } from "./entities/movie-tags.entity";
import { CreateMovieTagsDto } from "./dto/create-movie-tags.dto";
import { UpdateMovieTagsDto } from "./dto/update-movie-tags.dto";

@Injectable()   
export class MovieTagsService {
    constructor(
        @InjectRepository(MovieTags)
        private readonly movieTagsRepository: Repository<MovieTags>,
    ) {}

    async create(createMovieTagsDto: CreateMovieTagsDto) {
        const movieTags = this.movieTagsRepository.create(createMovieTagsDto);
        return this.movieTagsRepository.save(movieTags);
    }

    async findOneById(id: string) {
        return this.movieTagsRepository.findOneBy({ id });
    }

    async update(id: string, updateMovieTagsDto: UpdateMovieTagsDto) {
        const movieTags = await this.movieTagsRepository.findOneBy({ id });

        if (!movieTags) {
            throw new Error('Movie tags not found');
        }
        return this.movieTagsRepository.save({
            ...updateMovieTagsDto,
            id,
            updatedAt: new Date(),
        });
    }

    async delete(id: string): Promise<MovieTags> {
        const deleteMovieTags = await this.movieTagsRepository.findOneBy({ id });

        if (!deleteMovieTags) {
            throw new Error('Movie tags not found');
        }
        await this.movieTagsRepository.softDelete({ id });

        const deletedMovieTags = await this.movieTagsRepository.findOneBy({ id });
        return deletedMovieTags;
    }
}