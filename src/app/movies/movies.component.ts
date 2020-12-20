import { Component } from '@angular/core';
import { MoviesService } from '../movies.service';
@Component({
    selector: 'movies', // ===> <div id="movies"> -> "#movies" -> <movies>
    templateUrl: './movies.component.html'
})
export class MoviesComponent {
    title :string = "List of movies"
    movies: string[];
    getTitle() {
        return this.title
    }
    constructor(movieService: MoviesService) {
        this.movies = movieService.getMovies();
    }
}