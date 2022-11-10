import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-c',
  templateUrl: './c.component.html',
  styleUrls: ['./c.component.css']
})
export class CComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  navigate()  {
    this.route.navigate(['a'])
  }

}