import { Component, inject } from '@angular/core';
import {CommonModule} from '@angular/common';
import { Movie } from '../movie';
import {ActivatedRoute, Router} from '@angular/router';
import {MovieComponent} from '../movie/movie.component';
import {MovieService} from '../movie.service';
import {RouterModule, RouterOutlet} from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-genre',
  standalone: true,
  imports: [CommonModule, MovieComponent, RouterModule, RouterOutlet, HttpClientModule],
  templateUrl: './genre.component.html',
  styles: ``
})
export class GenreComponent {
  route: ActivatedRoute = inject(ActivatedRoute);

  moviesList: Movie[] = [];
  private movieService = new MovieService(this.httpClient);
  genreId: number;
  genre: any;

  constructor(private httpClient: HttpClient){
    this.genreId = Number(this.route.snapshot.params['id']);
    this.movieService.getGenreById(this.genreId).subscribe((data: any) => {
      this.genre = data;
    });
    this.getMoviesOfGenre();
  }
  getMoviesOfGenre(): void {
    this.movieService.getMoviesByGenre(this.genreId).subscribe((data: any) => {
      this.moviesList = data;
    });
  }
}