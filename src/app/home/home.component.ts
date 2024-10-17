import { Component, inject } from '@angular/core';
import {CommonModule} from '@angular/common';
import { Movie } from '../movie';
import {MovieComponent} from '../movie/movie.component';
import {MovieService} from '../movie.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MovieComponent],
  templateUrl: './home.component.html',
  styles: ``
})
export class HomeComponent {
  moviesList: Movie[] = [];
  movieService: MovieService = inject(MovieService)

  constructor(){
    this.moviesList = this.movieService.getAllMovies();
  }

}
