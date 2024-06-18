import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatSidenavModule} from '@angular/material/sidenav';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import { NavHomeComponent } from './nav-home/nav-home.component';
import {MatChipsModule} from '@angular/material/chips';
import { FeatureComponent } from './feature/feature.component';
import { PricingComponent } from './pricing/pricing.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavHomeComponent,
    FeatureComponent,
    PricingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule,
    MatCheckboxModule,
    FormsModule,
    MatCardModule,
    MatChipsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
