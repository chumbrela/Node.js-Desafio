import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class UpdateMovieNoteDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsNotEmpty()
  @IsString()
  rating: number;

  @IsNotEmpty()
  updatedAt: Date;
}
