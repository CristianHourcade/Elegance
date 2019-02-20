import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  pointOne : boolean;
  pointTwo : boolean;
  pointThree : boolean;

  constructor() { 
    this.pointOne = true;
    this.pointTwo = false;
    this.pointThree = false;
  }

  ngOnInit() {
  }

  changeLayout(){

    // this.click = (this.click) ?  false : true;
  }

}
