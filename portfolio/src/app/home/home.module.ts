import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeBannerComponent } from './welcome-banner/welcome-banner.component';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { AboutComponent } from './about/about.component';
import { WorkComponent } from './work/work.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    HomeComponent,
    WelcomeBannerComponent,
    AboutComponent,
    WorkComponent,
    ContactComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
