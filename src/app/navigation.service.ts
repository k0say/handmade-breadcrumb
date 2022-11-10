import { Injectable } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, tap } from 'rxjs';

@Injectable()
export class NavigationService {
  public stack = [];

  constructor(private route: Router, private activeRoute: ActivatedRoute) {
    console.log('ASD');

    this.route.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        tap((url: NavigationEnd) => this.stack.push(url)),
        tap((_) => console.log(this.stack))
      )
      .subscribe();
    // this.route.events
    //   .pipe(
    //     filter((event) => event instanceof NavigationEnd),
    //     tap(console.log),
    //     tap((x) => this.stack.push(x.url))
    //   ).subscribe(console.log);
  }
}
