import { Component, VERSION } from '@angular/core';
import { NavigationService } from './navigation.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  constructor(private nav: NavigationService){}
  name = 'Angular ' + VERSION.major;
}
