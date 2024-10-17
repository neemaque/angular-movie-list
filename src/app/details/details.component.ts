import { Component, inject, OnInit } from '@angular/core';
import {CommonModule} from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';
import {MovieService} from '../movie.service';
import {Movie} from '../movie';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  movieService = inject(MovieService);
  movie: Movie | undefined;
  movieId: number;
  newScore: number;

  formChange = new FormGroup({
    name: new FormControl(),
    finished: new FormControl(),
    review: new FormControl(),
    genre: new FormControl(),
  });

  constructor(private router: Router){

    this.movieId = Number(this.route.snapshot.params['id']);
    this.movie = this.movieService.getMovieById(this.movieId);
    this.newScore = this.movie?.score ?? 0; 
  }  
  
  submitChange(){
    this.movieService.changeMovie(
      this.movieId,
      this.formChange.value.name ?? this.movie?.name ?? '',
      this.formChange.value.finished ?? this.movie?.finished ?? false,
      this.formChange.value.review ?? this.movie?.review ?? '',
      this.newScore ?? this.movie?.score ?? 0,
      this.formChange.value.genre ?? this.movie?.genre ?? '',
    );
    //this.router.navigateByUrl('home');
  }

  increaseScore(){
    if(this.newScore<5)this.newScore+=1;
  }
  decreaseScore(){
    if(this.newScore>0)this.newScore-=1;
  }
}
