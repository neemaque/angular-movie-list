import { Component, inject } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MovieService} from '../movie.service';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { ButtonDirective } from '../button.directive';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [ReactiveFormsModule, ButtonDirective, HttpClientModule],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css',
})
export class AddComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  router = inject(Router);
  moviesList: any[] = [];
  movie: any = {};
  private movieService = new MovieService(this.httpClient);

  formAdd = new FormGroup({
    name: new FormControl(),
  });

  constructor(private httpClient: HttpClient){
    this.movieService.getAllMovies().subscribe((data: any) => {
      this.moviesList = data;
    });
  }
  
  
  Next()
  {
    const newMovie = {
      "name": this.formAdd.value.name ?? '',
      "finished": false,
      "review": '',
      "score": 0,
      "image": 'https://blog.nscsports.org/wp-content/uploads/2014/10/default-img.gif',
      "genres": [],
    };
    this.movieService.addMovie(newMovie).subscribe({
      next: (response) => {
        const newMovieId = response.id;
        console.log('New movie ID:', newMovieId);
        this.router.navigate([`/details/${newMovieId}`]);
      },
      error: (err) => {
        console.error('Error adding movie:', err);
      }
    });
  }
}
