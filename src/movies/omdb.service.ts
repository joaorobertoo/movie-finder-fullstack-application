import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { lastValueFrom, map } from 'rxjs';
import { MovieDto } from './dto/movie.dto';

@Injectable()
export class OmdbService {
  constructor(
    private httpService: HttpService,
    private configService: ConfigService,
  ) {}

  async searchMovie(title: string): Promise<MovieDto> {
    const apiKey = this.configService.get<string>('API_KEY');
    const url = `https://www.omdbapi.com/?t=${encodeURI(title)}&apikey=${apiKey}`;

    const response = await lastValueFrom(this.httpService.get(url));
    const movie = response.data;

    // Mapeamento dos dados brutos para o MovieDto
    return {
      title: movie.Title,
      year: movie.Year,
      genre: movie.Genre,
      director: movie.Director,
      plot: movie.Plot,
      poster: movie.Poster,
    };
  }
}
