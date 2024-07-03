import { Routes } from '@angular/router';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ProjectsComponent } from './components/projects/projects.component';

export const routes: Routes = [{
    path: 'home',
    component: LandingpageComponent
}, {
    path: 'about-me',
    component: AboutMeComponent
}, {
    path: 'project/:title',
    component: ProjectsComponent
}, {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
}];
