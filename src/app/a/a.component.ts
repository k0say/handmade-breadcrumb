import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationService } from '../navigation.service';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css'],
})
export class AComponent implements OnInit {
  constructor(private route: Router) {}

  ngOnInit() {}

  navigate() {
    this.route.navigate(['b']);
  }
}
