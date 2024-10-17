import {Component} from '@angular/core';
import {HomeComponent} from './home/home.component';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent, RouterModule],
  template: `
    <main>
    <a [routerLink]="['/home/']">
      <header class="brand-name">
        <h1 class="big-name">Easy Movie List</h1>
        <h5>Keep track of the movies you watch.</h5>
      </header>
    </a>
      <section class="content">
        <router-outlet></router-outlet>
      </section>
    </main>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'movies';
}
