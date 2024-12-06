import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class MovieService {
  private apiUrl = 'https://6750b4bb69dc1669ec1c0df2.mockapi.io/api/v1/movies';
  

  constructor(private http: HttpClient) {}

  // GET all movies
  getAllMovies(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  // GET a single movie by ID
  getMovieById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  // POST a new movie
  addMovie(movie: any): Observable<any> {
    return this.http.post(this.apiUrl, movie);
  }

  // PUT update a movie
  changeMovie(id: number, movie: any): void {
    console.log(movie);
    console.log(id);
    console.log(`${this.apiUrl}/${id}`);
    this.http.put("${this.apiUrl}/${id}", movie);
  }

  // DELETE a movie
  deleteMovie(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
