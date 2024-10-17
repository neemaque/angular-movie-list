import { Injectable } from '@angular/core';
import { Movie } from './movie';

@Injectable({
  providedIn: 'root'
})

export class MovieService {
  moviesList: Movie[] = [
    {name: 'Yellow Submarine', finished: true, review: 'It is really good.', score: 5, genre: 'animated'},
    {name: 'Fantastic Mr. Fox', finished: true, review: 'Such a nice story.', score: 4, genre: 'animated'},
    {name: 'IT', finished: true, review: 'Not as scary as I thought.', score: 2, genre: 'horror'},
  ]
  
  getAllMovies(): Movie[] {
    return this.moviesList;
  }
  getMovieByName(name: string): Movie | undefined {
    return this.moviesList.find((movie) => movie.name = name)
  } 
  constructor() { }
}
