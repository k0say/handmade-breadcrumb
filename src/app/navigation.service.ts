import { Injectable } from '@angular/core';
import {
  ActivatedRoute,
  ActivationStart,
  NavigationEnd,
  Router,
  RoutesRecognized,
} from '@angular/router';
import { BehaviorSubject, filter, map, tap } from 'rxjs';

@Injectable()
export class NavigationService {
  public stack = [];

  constructor(private route: Router, private activeRoute: ActivatedRoute) {
    this.route.events
      .pipe(
        filter((e) => e instanceof ActivationStart),
        map((route) => {
          return route['snapshot'];
        }),
        tap((item) => {
          this.stack.push({
            title: item.data.breadcrumb,
            params: item.params,
          });
        })
      )
      .subscribe((customData) => {
        console.log(customData);
        console.log('STACK ', this.stack);
      });
  }
}

// this.router.events
// .pipe(filter(event => event instanceof NavigationEnd))
// .pipe(map(() => this.activatedRoute))
// .pipe(map((route) => {
//   while (route.firstChild) { route = route.firstChild; }
//   return route;
// }))
// .pipe(filter(route => route.outlet === 'primary'))
// .subscribe(route => {

//   let snapshot = this.router.routerState.snapshot;
//   let id = route
//   let url = snapshot.url;
//   let routeData = route.snapshot.data;

//   console.log(this.router.routerState);
//   let label = routeData['breadcrumb'];
//   let params = snapshot.root.params;

//   this.stack.push({
//     url: url,
//     label: label,
//     params: params
//   });
//   console.log(this.stack)
// });
