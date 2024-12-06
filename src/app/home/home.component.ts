import { Component, inject, OnInit } from '@angular/core';
import {CommonModule} from '@angular/common';
import { Movie } from '../movie';
import {MovieComponent} from '../movie/movie.component';
import {MovieService} from '../movie.service';
import {RouterModule, RouterOutlet, Router} from '@angular/router';
import { MouseOnDirective } from '../mouse-on.directive';
import { ButtonDirective } from '../button.directive';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MovieComponent, RouterModule, RouterOutlet, MouseOnDirective, ButtonDirective, HttpClientModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})

export class HomeComponent{
  moviesList: any[] = [];
  
  constructor(private httpClient: HttpClient) {
    this.loadMovies();
  }
  private movieService = new MovieService(this.httpClient);
  loadMovies(): void {
    this.movieService.getAllMovies().subscribe((data: any) => {
      this.moviesList = data;
    });
  }
}
