import { Component, inject } from '@angular/core';
import {CommonModule} from '@angular/common';
import { Movie } from '../movie';
import {MovieComponent} from '../movie/movie.component';
import {MovieService} from '../movie.service';
import {RouterModule, RouterOutlet, Router} from '@angular/router';
import { MouseOnDirective } from '../mouse-on.directive';
import { ButtonDirective } from '../button.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MovieComponent, RouterModule, RouterOutlet, MouseOnDirective, ButtonDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})

export class HomeComponent {
  moviesList: Movie[] = [];
  movieService: MovieService = inject(MovieService)
  addId: Number;

  constructor(private router: Router){
    this.moviesList = this.movieService.getAllMovies();
    this.addId = this.moviesList.length+1;
  }
  
  addMovie(){
    this.addId = this.moviesList.length+1;
    console.log("hi");
    this.router.navigateByUrl('add/'+ this.addId);
  }
}
