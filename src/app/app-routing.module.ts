import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LandingScreenComponent } from './landing-screen/landing-screen.component';

const routes: Routes = [
  {
    path:"",
    component: LandingScreenComponent,
    pathMatch:"full"
  },{
    path:"dashboard",
    component: DashboardComponent,
    pathMatch:"full"
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
