import { Component, ViewEncapsulation } from '@angular/core';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';


@Component({
  selector: 'app-landingpage',
  standalone: true,
  imports: [
    MatDividerModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
  ],
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.scss',
  encapsulation:ViewEncapsulation.None
})
export class LandingpageComponent {
projects:any= [{'title':'PowerYou AI | Human Life OS',text:` GenAI techonology analyzes your idea , priorties and goals then ofer personalized insights and
system to help you make optiomal chokices and take effective actions`,'image':'Project1.png'},{'title':'Notice of Proposal App',text:` Enabling residents to review submissions of the neighborhood's proposed developments online to expedite engagement.`,'image':'Project2.png'},{
  'title':'Gregora App','text':`A user-centric productivity app that addresses customers' work and efficiency-related pain points and frustrations.`,'image':'Project3.png'
}];

}
