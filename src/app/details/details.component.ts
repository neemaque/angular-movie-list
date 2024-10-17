import { Component, inject } from '@angular/core';
import {CommonModule} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {MovieService} from '../movie.service';
import {Movie} from '../movie';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './details.component.html',
  styles: ``
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  movieService = inject(MovieService);
  movie: Movie | undefined;
  movieId: number;

  constructor(){
    this.movieId = Number(this.route.snapshot.params['id']);
    this.movie = this.movieService.getMovieById(this.movieId);
  }
  
}
