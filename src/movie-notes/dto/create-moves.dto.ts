import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreateMovieNoteDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsNotEmpty()
  @IsString()
  rating: number;

  @IsUUID()
  userId: string;
}
