import { Module } from '@nestjs/common';
import { MoviesController } from './movies.controller';
import { OmdbService } from './omdb.service';
import { HttpModule } from '@nestjs/axios';

@Module({
    imports: [HttpModule],
    controllers: [MoviesController],
    providers: [OmdbService],
  })
export class MoviesModule {}
