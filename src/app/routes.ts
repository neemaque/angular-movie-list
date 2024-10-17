import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {DetailsComponent} from './details/details.component';
import {GenreComponent} from './genre/genre.component';

const routeConfig: Routes = [
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
  ];
  export default routeConfig;