import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';
import { CComponent } from './c/c.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AComponent, BComponent, CComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot([
      { path: 'a', component: AComponent, data: { breadcrumb: 'page A' } },
      { path: 'b/:id/:name', component: BComponent, data: { breadcrumb: 'page B' } },
      { path: 'c', component: CComponent, data: { breadcrumb: 'page C' } },
      { path: '**', redirectTo: 'a' },
    ]),
  ],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
