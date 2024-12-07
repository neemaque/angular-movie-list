import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailsComponent } from './details.component';
import { ActivatedRoute, Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MovieService } from '../movie.service';
import { of, throwError } from 'rxjs';
import { By } from '@angular/platform-browser';

describe('DetailsComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;
  let movieService: jasmine.SpyObj<MovieService>;
  let router: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    const movieServiceSpy = jasmine.createSpyObj('MovieService', ['getMovieById', 'getGenreById', 'changeMovie', 'deleteMovie']);
    const routerSpy = jasmine.createSpyObj('Router', ['navigate', 'navigateByUrl']);

    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, HttpClientTestingModule],
      declarations: [DetailsComponent],
      providers: [
        { provide: MovieService, useValue: movieServiceSpy },
        { provide: Router, useValue: routerSpy },
        { provide: ActivatedRoute, useValue: { snapshot: { params: { id: '1' } } } },
      ],
    }).compileComponents();

    movieService = TestBed.inject(MovieService) as jasmine.SpyObj<MovieService>;
    router = TestBed.inject(Router) as jasmine.SpyObj<Router>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load a movie on initialization', () => {
    const mockMovie = { id: 1, name: 'Test Movie', genres: [1, 2], score: 3, finished: false };
    const mockGenres = [{ id: 1, name: 'Genre 1' }, { id: 2, name: 'Genre 2' }];

    movieService.getMovieById.and.returnValue(of(mockMovie));
    movieService.getGenreById.and.callFake((id: number) => {
      return of(mockGenres.find((genre) => genre.id === id));
    });

    fixture.detectChanges();

    expect(component.movie).toEqual(mockMovie);
    expect(component.newScore).toBe(mockMovie.score);
    expect(component.movieGenres).toEqual(mockGenres);
  });

  it('should increase and decrease the score', () => {
    component.newScore = 3;

    component.increaseScore();
    expect(component.newScore).toBe(4);

    component.decreaseScore();
    expect(component.newScore).toBe(3);
  });

  it('should not increase score beyond 5 or decrease below 0', () => {
    component.newScore = 5;
    component.increaseScore();
    expect(component.newScore).toBe(5);

    component.newScore = 0;
    component.decreaseScore();
    expect(component.newScore).toBe(0);
  });

  it('should mark the movie as finished', () => {
    component.movie = { finished: false };
    component.finished();
    expect(component.movie.finished).toBeTrue();
  });

  it('should submit changes to the movie', () => {
    const mockMovie = { id: 1, name: 'Test Movie', genres: [1, 2], score: 3, finished: false };
    movieService.changeMovie.and.returnValue(of(mockMovie));

    component.movie = mockMovie;
    component.formChange.setValue({
      name: 'Updated Movie',
      finished: true,
      review: 'Great!',
      imageUrl: 'updated.jpg',
    });
    component.submitChange();

    expect(movieService.changeMovie).toHaveBeenCalledWith(1, {
      name: 'Updated Movie',
      finished: true,
      review: 'Great!',
      score: 3,
      image: 'updated.jpg',
      genres: [1, 2],
    });
    expect(router.navigate).toHaveBeenCalledWith(['/home']);
  });

  it('should delete the movie', () => {
    movieService.deleteMovie.and.returnValue(of({}));

    component.deleteMovie();

    expect(movieService.deleteMovie).toHaveBeenCalledWith(1);
    expect(router.navigate).toHaveBeenCalledWith(['/home']);
  });

  it('should handle errors during movie deletion', () => {
    spyOn(console, 'error');
    movieService.deleteMovie.and.returnValue(throwError(() => new Error('Deletion failed')));

    component.deleteMovie();

    expect(console.error).toHaveBeenCalledWith('Error deleting movie:', jasmine.any(Error));
  });
});
