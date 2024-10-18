import {Routes} from '@angular/router';
import { LoginComponent } from './login/login.component';
import {HomeComponent} from './home/home.component';
import {DetailsComponent} from './details/details.component';
import {GenreComponent} from './genre/genre.component';
import { AddComponent } from './add/add.component';

const routeConfig: Routes = [
    {
      path: '',
      component: LoginComponent,
      title: 'Login page',
    },
    {
      path: 'home',
      component: HomeComponent,
      title: 'Home page',
    },
    {
      path: 'details/:id',
      component: DetailsComponent,
      title: 'Movie details',
    },
    {
      path: 'genre/:genre',
      component: GenreComponent,
      title: 'Movies of a Genre',
    },
    {
      path: 'add/:id',
      component: AddComponent,
      title: 'Add a movie',
    }
  ];
  export default routeConfig;