import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'custom-pipe-example',
  templateUrl: './custom-pipe-example.component.html',
  styleUrls: ['./custom-pipe-example.component.css']
})
export class CustomPipeExampleComponent implements OnInit {
  longText: string =  "Very long text long text long text long text long textlong textlong textlong textlong textlong textlong textlong textlong textlong textlong textlong text"
  length: number | undefined = undefined;
  constructor() { }
  onKeyUp() {
    alert(this.length)
  }
  resetLength() {
    this.length = 1;
  }
  ngOnInit(): void {
  }

}
