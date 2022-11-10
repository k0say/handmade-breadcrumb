import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { NavigationService } from '../navigation.service';
import { data } from './data';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css'],
})
export class AComponent implements OnInit {
  public arr1;
  constructor(private route: Router) {}

  ngOnInit() {
    this.arr1 = data;
    // console.log(this.arr1[0]);
  }

  navigate() {
    this.route.navigate(['b']);
  }

  navigateTo(id, name) {
    this.route.navigate(['b', id, name])
  }
}
