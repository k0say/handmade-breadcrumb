import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationService } from '../navigation.service';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css'],
})
export class BreadcrumbComponent implements OnInit {
  @Input() breadValue;

  constructor(private navigation: NavigationService, private route: Router) {
    console.log(this.navigation.stack);
    this.breadValue = this.navigation.stack;
  }

  ngOnInit() {}

  navigateTo(event) {
    console.log("ROUTE ", event.url);
    if (event) {
      const id = event.id;
      this.breadValue = this.navigation.stack = this.navigation.stack.filter(
        (item) => !(item.id > id - 1)
      );
      // this.route.navigate(event.url)
    }
  }
}
