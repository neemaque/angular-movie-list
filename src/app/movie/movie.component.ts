import { Component, Input } from '@angular/core';
import { Movie } from '../movie';
import {CommonModule, NgIf} from '@angular/common';
import {RouterModule, RouterOutlet} from '@angular/router';
import { MouseOnPurpleDirective } from '../mouse-on-purple.directive';
import { MovieDirective } from '../movie.directive';

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [RouterModule, RouterOutlet, NgIf, MouseOnPurpleDirective, MovieDirective],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css'
})
export class MovieComponent {
  @Input() movie!: Movie;
}
