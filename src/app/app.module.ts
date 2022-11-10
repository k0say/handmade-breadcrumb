import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AppRoutingModule } from './app.routing.module';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { NavigationService } from './navigation.service';

@NgModule({
  imports: [AppRoutingModule, BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, BreadcrumbComponent],
  bootstrap: [AppComponent],
  providers: [NavigationService],
})
export class AppModule {}
