import { IsNotEmpty, IsString } from "class-validator";
import { CreateMovieTagsDto } from "./create-movie-tags.dto";

export class UpdateMovieTagsDto {
    @IsNotEmpty()
    @IsString()
    name: string
}