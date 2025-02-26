import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreateMovieTagsDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsUUID()
  noteId: string;

  @IsUUID()
  userId: string;
}
