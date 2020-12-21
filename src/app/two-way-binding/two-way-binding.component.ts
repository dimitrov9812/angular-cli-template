import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent implements OnInit {
  email: string = "template@temlate@tfg.com";

  constructor() { }

  onKeyUp() {
    alert(this.email);
  }
  clearEmail() {
    this.email = ''
  }
  ngOnInit(): void {
  }
}
