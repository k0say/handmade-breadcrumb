import { Injectable } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, tap } from 'rxjs';

@Injectable()
export class NavigationService {
  public stack = [];

  constructor(private route: Router, private activeRoute: ActivatedRoute) {
    // this.route.events.pipe(
    //   filter(e => e instanceof NavigationEnd),
    //   // tap((x:any) => console.log(x)),
    //   tap(_ => console.log("AAA " ,this.activeRoute.snapshot.data))
    // )

    this.route.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        tap((url: NavigationEnd) => {
          // console.log('URL', url.url.split('/')[1]);
          // const path = url.url.split('/')[1];
          // const z = this.route?.config.find((x: any) => x.path == path)//.data.msg;
          console.log('DATA ', this.activeRoute.children[0].snapshot.params);
          // console.log("Z ", z);
          // url['title'] = z;
          // (url['title'] = this.route.config[url.id].data?.msg),
          this.stack.push(url);
        })
        // tap((_) => console.log('STACK ', this.stack))
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
