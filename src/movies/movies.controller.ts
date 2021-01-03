import { Controller, Delete, Get, Param, Post, Patch, Body, Query, BadRequestException } from '@nestjs/common';
import { CreateMovieDTO } from './dto/create-movie.dto';
import { UpdateMovieDTO } from './dto/update-movie.dto';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {

    constructor(private readonly movieService: MoviesService) {}

    @Get()
    getAll() {
        return this.movieService.getAll()
    }
    
    @Get('search')
    search(@Query('year') year: string) {
        return this.movieService.search(year);
    }

    @Get(':id')
    getOne(@Param('id') movieId: number) {
        return this.movieService.getOne(movieId);
    }

    @Post()
    create(@Body() movieData: CreateMovieDTO) {
        return this.movieService.create(movieData);
    }

    @Delete(':id')
    delete(@Param('id') movieId: number) {
        return this.movieService.deleteOne(movieId);
    }

    @Patch(':id')
    patch(@Param('id') movieId: number, @Body() patchData: UpdateMovieDTO) {
        return this.movieService.update(movieId, patchData);
    }

}
