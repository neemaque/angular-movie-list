import { Injectable } from '@angular/core';
import { Movie } from './movie';

@Injectable({
  providedIn: 'root'
})

export class MovieService {
  moviesList: Movie[] = [
    {id: 1, name: 'Yellow Submarine', finished: true, review: 'It is really good.', score: 5, genre: 'animated'},
    {id: 2, name: 'Fantastic Mr. Fox', finished: true, review: 'Such a nice story.', score: 4, genre: 'animated'},
    {id: 3, name: 'IT', finished: true, review: 'Not as scary as I thought.', score: 2, genre: 'horror'},
  ]
  
  getAllMovies(): Movie[] {
    return this.moviesList;
  }
  getMovieById(id: number): Movie | undefined {
    return this.moviesList.find((movie) => movie.id === id)
  }
  getMoviesByGenre(genre: string): Movie[]{
    return this.moviesList.filter(movie => movie.genre="animated")
  }
  constructor() { }
}
