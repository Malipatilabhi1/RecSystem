import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LandingScreenComponent } from './landing-screen/landing-screen.component';
import { AnalysisComponent } from './analysis/analysis.component';
import { SelectionComponent } from './selection/selection.component';

const routes: Routes = [
  {
    path:"",
    component: LandingScreenComponent,
    pathMatch:"full"
  },{
    path:"dashboard",
    component: DashboardComponent,
    pathMatch:"full"
  },{
    path:"analysis",
    component: AnalysisComponent,
    pathMatch:"full"
  },{
    path:"selection",
    component: SelectionComponent,
    pathMatch:"full"
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
