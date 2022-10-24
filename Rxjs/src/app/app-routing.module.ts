import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConcatMapComponent } from './operator/concat-map/concat-map.component';

const routes: Routes = [
  {path:'concat-map',component:ConcatMapComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
