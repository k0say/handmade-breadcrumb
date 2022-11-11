import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { data } from './data';

@Component({
  selector: 'app-c',
  templateUrl: './c.component.html',
  styleUrls: ['./c.component.css']
})
export class CComponent implements OnInit {
    arr1: { id: number; name: string; username: string; email: string; address: { street: string; suite: string; city: string; zipcode: string; geo: { lat: string; lng: string; }; }; phone: string; website: string; company: { name: string; catchPhrase: string; bs: string; }; }[];

    constructor(private route: Router) {}

    ngOnInit() {
      this.arr1 = data;
      // console.log(this.arr1[0]);
    }
  
    navigateTo(id, name) {
      this.route.navigate(['a', id, name])
    }
    

  navigate()  {
    this.route.navigate(['a'])
  }

}