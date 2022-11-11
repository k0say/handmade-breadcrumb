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
  i = 0;

  constructor(private route: Router, private activeRoute: ActivatedRoute) {
    // this.route.events
    //   .pipe(
    //     filter((e) => e instanceof ActivationStart),
    //     map((instance: ActivationStart) => instance.snapshot.url)
    //   )
    //   .subscribe((res) => console.log('RES ', res));

    this.route.events
      .pipe(
        filter((e) => e instanceof ActivationStart),
        map((route) => {
          return route['snapshot'];
        }),
        tap((item) => {
          console.log("1", item.url.map(p => decodeURIComponent(p.toString())).join('/'))
          console.log("2", this.stack.at(-1))
          if(this.stack.length > 0 && item.url.map(p => decodeURIComponent(p.toString())).join('/') == this.stack[this.stack.length - 1].url) { console.log("SONO UGUALI")}
          console.log("ITEM ", item)
          this.stack.push({
            id: this.i++,
            title: item.data.breadcrumb,
            params: JSON.parse(decodeURIComponent(JSON.stringify(item.params))),
            url: item.url
              .map((p) => {
                return decodeURIComponent(p.toString())
              })
              .join('/'),
          });
        })
      )
      .subscribe((customData) => {
        // console.log("OUT ", customData);
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
