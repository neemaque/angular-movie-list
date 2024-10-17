import { Component, inject } from '@angular/core';
import {CommonModule} from '@angular/common';
import { Movie } from '../movie';
import {MovieComponent} from '../movie/movie.component';
import {MovieService} from '../movie.service';
import {RouterModule, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MovieComponent, RouterModule, RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  moviesList: Movie[] = [];
  movieService: MovieService = inject(MovieService)

  constructor(){
    this.moviesList = this.movieService.getAllMovies();
  }


}
