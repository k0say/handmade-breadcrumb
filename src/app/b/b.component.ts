import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css']
})
export class BComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  navigate()  {
    this.route.navigate(['c'])
  }

}