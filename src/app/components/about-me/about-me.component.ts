import { Component, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [RouterLink, MatChipsModule,MatButtonModule,MatIcon],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',
  encapsulation:ViewEncapsulation.None
})
export class AboutMeComponent {

  skillList = ['AI/ML Design','Design Thinking','Data-Driven Design','User Research','Usability Testing','Accessability Design','Information Architecture','Wireframes','Rapid Prototyping','User Journey']
  toolList = ['Adobe Creative Suite','Figma','Micro','Google Analytics','Google Suite','Useberry','Webflow']
}
