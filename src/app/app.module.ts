import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { WorkExperienceComponent } from './components/work-experience/work-experience.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ProjectsModuleModule } from './modules/projects-module/projects-module.module';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    WorkExperienceComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ProjectsModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
