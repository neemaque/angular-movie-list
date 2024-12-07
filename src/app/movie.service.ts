import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})

export class MovieService {
  private apiUrlMovies = 'https://6750b4bb69dc1669ec1c0df2.mockapi.io/api/v1/movies';
  private apiUrlGenres = 'https://6750b4bb69dc1669ec1c0df2.mockapi.io/api/v1/genres';
  

  constructor(private http: HttpClient) {}

  getAllMovies(): Observable<any> {
    return this.http.get(this.apiUrlMovies);
  }

  getMovieById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrlMovies}/${id}`);
  }

  addMovie(movie: any): Observable<any> {
    return this.http.post(this.apiUrlMovies, movie);
  }

  changeMovie(id: number, movie: any): Observable<any> {
    return this.http.put(`${this.apiUrlMovies}/${id}`, movie);
  }

  deleteMovie(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrlMovies}/${id}`);
  }


  getAllGenres(): Observable<any> {
    return this.http.get(this.apiUrlGenres);
  }
  getGenreById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrlGenres}/${id}`);
  }
  changeGenre(id: number, genre: any): Observable<any> {
    return this.http.put(`${this.apiUrlGenres}/${id}`, genre);
  }
  getMoviesByGenre(genreId: number): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrlMovies).pipe(
      map((movies) => movies.filter((movie) => movie.genres.includes(genreId)))
    );
  }

  addGenre(genre: any): Observable<any> {
    return this.http.post(this.apiUrlGenres, genre);
  }
  deleteGenre(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrlGenres}/${id}`);
  }
}
