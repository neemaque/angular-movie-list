import { Component, inject, OnInit } from '@angular/core';
import {CommonModule} from '@angular/common';
import { Movie } from '../movie';
import {MovieComponent} from '../movie/movie.component';
import {MovieService} from '../movie.service';
import {RouterModule, RouterOutlet, Router} from '@angular/router';
import { MouseOnDirective } from '../mouse-on.directive';
import { ButtonDirective } from '../button.directive';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MovieComponent, RouterModule, RouterOutlet, MouseOnDirective, ButtonDirective, HttpClientModule, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})

export class HomeComponent{
  moviesList: any[] = [];
  genresList: any[] = [];
  router = inject(Router);
  
  constructor(private httpClient: HttpClient) {
    this.loadMovies();
    this.loadGenres();
  }
  
  private movieService = new MovieService(this.httpClient);

  formGenre = new FormGroup({
    name: new FormControl(),
  });
  
  loadMovies(): void {
    this.movieService.getAllMovies().subscribe((data: any) => {
      this.moviesList = data;
    });
  }

  loadGenres(): void {
    this.movieService.getAllGenres().subscribe((data: any) => {
      this.genresList = data;
    });
  }

  addMovie(){
    this.router.navigateByUrl('add');
  }

  addGenre(){
    const newGenre = {
      "name": this.formGenre.value.name ?? '',
    };
    this.movieService.addGenre(newGenre).subscribe({
      next: (response) => {
        window.location.href = window.location.href;
      },
      error: (err) => {
        console.error('Error adding genre:', err);
      }
    });
  }
}
