import { IsNotEmpty, IsString } from "class-validator";

export class CreateMovieTagsDto {
    @IsNotEmpty()
    @IsString()
    name: string
}