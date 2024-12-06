import {Routes} from '@angular/router';
import { LoginComponent } from './login/login.component';
import {HomeComponent} from './home/home.component';
import {DetailsComponent} from './details/details.component';
import {GenreComponent} from './genre/genre.component';
import { AddComponent } from './add/add.component';
import { RegisterComponent } from './register/register.component';

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
      path: 'genre/:id',
      component: GenreComponent,
      title: 'Movies of a Genre',
    },
    {
      path: 'add',
      component: AddComponent,
      title: 'Add a movie',
    },
    {
      path: '',
      component: LoginComponent,
      title: 'Login',
    },
    {
      path: 'register',
      component: RegisterComponent,
      title: 'Register',
    },
  ];
  export default routeConfig;