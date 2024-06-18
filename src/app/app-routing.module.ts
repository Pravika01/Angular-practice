import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavHomeComponent } from './nav-home/nav-home.component';
import { FeatureComponent } from './feature/feature.component';
import { PricingComponent } from './pricing/pricing.component';

const routes: Routes = [
  { path:'nav-home',component:NavHomeComponent},
  {path:'feature',component:FeatureComponent},
  {path:'pricing',component:PricingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
