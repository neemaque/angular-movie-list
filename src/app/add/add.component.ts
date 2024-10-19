import { Component, inject } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { Movie } from '../movie';
import {MovieService} from '../movie.service';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { ButtonDirective } from '../button.directive';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [ReactiveFormsModule, ButtonDirective],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css',
})
export class AddComponent {
  movieService: MovieService = inject(MovieService)
  route: ActivatedRoute = inject(ActivatedRoute);
  movieId: Number;

  formAdd = new FormGroup({
    name: new FormControl(),
  });
  constructor(private router: Router){
    this.movieId = Number(this.route.snapshot.params['id']);
  }
  
  
  Next(){
    this.movieService.addMovie(this.formAdd.value.name ?? '');
    this.router.navigateByUrl('details/'+ this.movieId);
  }
}
