import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsComponent } from './forms/forms.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AccordianComponent } from './accordian/accordian.component';
import { StepperComponent } from './stepper/stepper.component';
import { TabsComponent } from './tabs/tabs.component';

const routes: Routes = [
  {
    path:"",
    component:DashboardComponent
  },
  {
    path:"forms",
    component:FormsComponent
  },
  {
    path:"navigation",
    component:NavigationComponent
  },
  {
    path:"accordian",
    component:AccordianComponent
  },
  {
    path:"stepper",
    component:StepperComponent
  },
  {
    path:"tabs",
    component:TabsComponent
  }

];

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
