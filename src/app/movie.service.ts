import { Injectable } from '@angular/core';
import { Movie } from './movie';

@Injectable({
  providedIn: 'root',
})

export class MovieService {
  moviesList: Movie[] = [
    {id: 1, name: 'Yellow Submarine', finished: false, review: 'It is really good.', score: 5, genre: 'animated'},
    {id: 2, name: 'Fantastic Mr. Fox', finished: true, review: 'Such a nice story.', score: 4, genre: 'animated'},
    {id: 3, name: 'IT', finished: true, review: 'Not as scary as I thought.', score: 2, genre: 'horror'},
  ]
  getAllMovies(): Movie[] {
    return this.moviesList.filter((movie) => movie.id > 0)
  }
  getMovieById(id: number): Movie | undefined {
    return this.moviesList.find((movie) => movie.id === id)
  }
  getMoviesByGenre(genre: string): Movie[]{
    return this.moviesList.filter(movie => movie.genre === genre)
  }
  changeMovie(id: number, name: string, finished: boolean, review: string, score: number, genre:string){
    this.moviesList[id-1].name = name;
    this.moviesList[id-1].review = review;
    this.moviesList[id-1].genre = genre;
    this.moviesList[id-1].score = score;
  }
  addMovie(name: string){
    const movie = {id: 0, name: '', finished: false, review: '', score: 0, genre: ''}
    movie.id = this.moviesList.length+1;
    movie.name = name;
    movie.finished = false;
    movie.review = "";
    movie.score = 0;
    movie.genre = "";
    this.moviesList.push(movie);
  }
}
