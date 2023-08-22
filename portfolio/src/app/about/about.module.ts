import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutRoutingModule } from './about-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { AboutComponent } from './about.component';
import { SkillsComponent } from './skills/skills.component';
import { CredentialsComponent } from './credentials/credentials.component';

@NgModule({
  declarations: [
    ProfileComponent,
    AboutComponent,
    SkillsComponent,
    CredentialsComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule
  ]
})
export class AboutModule { }
