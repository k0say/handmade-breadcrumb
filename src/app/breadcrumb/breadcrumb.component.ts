import { Component, Input, OnInit } from '@angular/core';
import { NavigationService } from '../navigation.service';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css'],
})
export class BreadcrumbComponent implements OnInit {
  @Input() breadValue;

  constructor(private navigation: NavigationService) {
    console.log(this.navigation.stack);
    this.breadValue = this.navigation.stack;
  }

  ngOnInit() {}

  navigateTo(event) {
    // console.log(event);
    if (event) {
      const id = event.id;
      this.breadValue = this.navigation.stack = this.navigation.stack.filter(
        (item) => !(item.id > id - 1)
      );
    }
  }
}
