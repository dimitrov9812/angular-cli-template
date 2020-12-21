import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bootstrap-example',
  templateUrl: './bootstrap-example.component.html',
  styleUrls: ['./bootstrap-example.component.css']
})
export class BootstrapExampleComponent implements OnInit {
  isActive: boolean = true;
  isActiveText: string = 'Active';

  constructor() { }
  onBootstrapButtonClick(event: any) {
    this.isActive = !this.isActive;
    this.isActive ? this.isActiveText = "Active" : this.isActiveText = "Not Active"
  }

  ngOnInit(): void {
  }

}
