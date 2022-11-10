import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';
import { CComponent } from './c/c.component';

@NgModule({
  declarations: [AComponent, BComponent, CComponent],
  imports: [
    RouterModule.forRoot([
      { path: 'a', component: AComponent },
      { path: 'b', component: BComponent },
      { path: 'c', component: CComponent },
      { path: '**', redirectTo: 'a' },
    ]),
  ],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
