import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { data } from './data';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css']
})
export class BComponent implements OnInit {
    arr1: any;

    constructor(private route: Router) {}

    ngOnInit() {
      this.arr1 = data;
      // console.log(this.arr1[0]);
    }
  
    navigateTo(id, name) {
      this.route.navigate(['c', id, name])
    }
    
  navigate()  {
    this.route.navigate(['c'])
  }

}