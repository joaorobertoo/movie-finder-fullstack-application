import { Controller, Get, Query } from '@nestjs/common';
import { OmdbService } from './omdb.service';
import { MovieDto } from './dto/movie.dto';

@Controller('movies')
export class MoviesController {
  constructor(private readonly omdbService: OmdbService) {}

  @Get('search')
  search(@Query('title') title: string): Promise<MovieDto>{
    return this.omdbService.searchMovie(title);
  }
}
