import { Routes } from '@angular/router';
import { LandingpageComponent } from './components/landingpage/landingpage.component';

export const routes: Routes = [{
    path: 'home',
    component: LandingpageComponent
}, {
    path:'',
    pathMatch: 'full',
    redirectTo: 'home'
}];
