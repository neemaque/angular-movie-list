import { Component, inject } from '@angular/core';
import {CommonModule} from '@angular/common';
import { Movie } from '../movie';
import {ActivatedRoute, Router} from '@angular/router';
import {MovieComponent} from '../movie/movie.component';
import {MovieService} from '../movie.service';
import {RouterModule, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-genre',
  standalone: true,
  imports: [CommonModule, MovieComponent, RouterModule, RouterOutlet],
  templateUrl: './genre.component.html',
  styles: ``
})
export class GenreComponent {
  route: ActivatedRoute = inject(ActivatedRoute);

  moviesList: Movie[] = [];
  movieService: MovieService = inject(MovieService)
  genre: string;

  constructor(){
    this.genre = String(this.route.snapshot.params['genre']);
    this.moviesList = this.movieService.getMoviesByGenre(this.genre);
  }
}