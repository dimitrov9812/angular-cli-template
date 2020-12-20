import { Component } from '@angular/core';
import { MoviesService } from '../movies.service';
@Component({
    selector: 'movies', // ===> <div id="movies"> -> "#movies" -> <movies>
    templateUrl: './movies.component.html'
})
export class MoviesComponent {
    title :string = "List of movies"
    movies: string[];
    isActive:boolean = true;
    email: string = 'templateEmail@grt.dot';
    detailedMovie = {
        title: "The Avengers",
        year: 2019,
        mainActor: "R.D. Junior",
        rating: '9.4',
        price: '450',
        releaseDate: new Date(2019,20,10)
    }
    longText: string =  "Very long text long text long text long text long textlong textlong textlong textlong textlong textlong textlong textlong textlong textlong textlong text"
    getTitle() {
        return this.title
    }
    onBootstrapButtonClick($event) {
        console.log($event);
        alert("Button was clicked");
        console.log("Button was clicked")
    }
    onKeyUp() {
        console.log(this.email)
    }
    constructor(movieService: MoviesService) {
        this.movies = movieService.getMovies();
    }
}