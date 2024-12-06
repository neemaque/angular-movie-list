import { Component, inject, OnInit } from '@angular/core';
import {CommonModule, NgIf} from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';
import {MovieService} from '../movie.service';
import {Movie} from '../movie';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NgIf, HttpClientModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent {

  constructor(private httpClient: HttpClient) {
    this.movieId = Number(this.route.snapshot.params['id']);
    this.newScore = 0;
    this.loadMovies();
  }

  route: ActivatedRoute = inject(ActivatedRoute);
  private movieService = new MovieService(this.httpClient);
  movie: any;
  movieId: number;
  public newScore: number;
  

  loadMovies(): void {
    this.movieService.getMovieById(this.movieId).subscribe((data: any) => {
      this.movie = data;
      this.newScore = this.movie?.score ?? 0; 
    });
  }

  formChange = new FormGroup({
    name: new FormControl(),
    finished: new FormControl(),
    review: new FormControl(),
    genre: new FormControl(),
  });

  increaseScore(){
    if(this.newScore<5)this.newScore+=1;
  }
  decreaseScore(){
    if(this.newScore>0)this.newScore-=1;
  }

  finished(){
    this.movie!.finished = true;
  }
  submitChange(){
    const updatedMovie = {
      name: this.formChange.value.name ?? this.movie?.name ?? '',
      finished: this.formChange.value.finished ?? this.movie?.finished ?? false,
      review: this.formChange.value.review ?? this.movie?.review ?? '',
      score: this.newScore ?? this.movie?.score ?? 0,
    };
    this.movieService.changeMovie(
      this.movieId,
      updatedMovie
    );
    //this.router.navigateByUrl('home');
  }
}