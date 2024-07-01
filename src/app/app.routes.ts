import { Routes } from '@angular/router';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { AboutMeComponent } from './components/about-me/about-me.component';

export const routes: Routes = [{
    path: 'home',
    component: LandingpageComponent
}, {
    path: 'about-me',
    component: AboutMeComponent
}, {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
}];
