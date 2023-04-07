import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResultsComponent } from './results/results.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'' , component:HomeComponent},
  {
    path: 'result' , component: ResultsComponent
  },
  {path:'home', component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
