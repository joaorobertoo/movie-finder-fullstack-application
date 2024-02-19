import { IsString, IsNotEmpty, IsOptional } from 'class-validator';
import { RatingDto } from './rating.dto';

export class MovieDto {
  @IsNotEmpty()
  @IsString()
  readonly title: string;

  @IsOptional()
  @IsString()
  readonly year?: string;

  @IsOptional()
  @IsString()
  readonly genre?: string;

  @IsOptional()
  @IsString()
  readonly director?: string;

  @IsOptional()
  @IsString()
  readonly plot?: string;

  @IsOptional()
  @IsString()
  readonly poster?: string;

  @IsOptional()
  @IsString()
  ratings?: RatingDto[];
}
