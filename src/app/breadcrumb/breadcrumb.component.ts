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
    console.log('DELETE ', event);
    if (event) {
      const id = event.id;
      this.breadValue = this.navigation.stack = this.navigation.stack.filter(
        (item) => !(item.id > id)
      );
      console.log(this.breadValue);
      this.route.navigate([event.url]);
    }
  }
}
