import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MovieTags } from './entities/movie-tags.entity';
import { MovieTagsController } from './movie-tags.controller';
import { MovieTagsService } from './movie-tags.service';

@Module({
  imports: [TypeOrmModule.forFeature([MovieTags])],
  controllers: [MovieTagsController],
  providers: [MovieTagsService],
})
export class MovieTagsModule {}
