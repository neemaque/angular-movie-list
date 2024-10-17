import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {DetailsComponent} from './details/details.component';

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
      component: DetailsComponent,
      title: 'Movies of a Genre',
    },
  ];
  export default routeConfig;