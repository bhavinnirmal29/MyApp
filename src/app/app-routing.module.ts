import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { WorkExperienceComponent } from './components/work-experience/work-experience.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { QualificationsComponent } from './components/qualifications/qualifications.component';
import { SkillsComponent } from './components/skills/skills.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { ThankYouComponent } from './components/thank-you/thank-you.component';

const routes: Routes = [
  {path:'',component:HomeComponent,pathMatch:'full'},
  {path:'About',component:AboutComponent},
  {path:'Contact',component:ContactComponent},
  {path:'WorkExperience',component:WorkExperienceComponent},
  {path:'Projects',component:ProjectsComponent},
  {path:'Qualifications',component:QualificationsComponent},
  {path:'Skills',component:SkillsComponent},
  {path:'ThankYou',component:ThankYouComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
