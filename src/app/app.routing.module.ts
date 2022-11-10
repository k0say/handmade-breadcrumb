import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';
import { CComponent } from './c/c.component';

@NgModule({
  declarations: [AComponent, BComponent, CComponent],
  imports: [
    RouterModule.forRoot([
      { path: 'a', component: AComponent, data: { msg: 'page msg' } },
      { path: 'b', component: BComponent, data: { msg: 'page msg2' } },
      { path: 'c', component: CComponent, data: { msg: 'page msg3' } },
      { path: '**', redirectTo: 'a' },
    ]),
  ],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
