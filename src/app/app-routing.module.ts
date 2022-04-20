import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { SwansonComponent } from './components/swanson/swanson.component';

const routes: Routes = [
  {path: 'about', component: AboutComponent},
  {path: 'swanson', component: SwansonComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
