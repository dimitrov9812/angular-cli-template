import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pipe-example',
  templateUrl: './pipe-example.component.html',
  styleUrls: ['./pipe-example.component.css']
})
export class PipeExampleComponent implements OnInit {
  movies: string[] = [];

  detailedMovie = {
    title: "The Avengers",
    year: 2019,
    mainActor: "R.D. Junior",
    rating: '9.4',
    price: '450',
    releaseDate: new Date(2019,20,10)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
