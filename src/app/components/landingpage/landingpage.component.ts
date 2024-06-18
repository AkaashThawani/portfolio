import { Component, ViewEncapsulation } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgFor } from '@angular/common';
import { Input, AfterViewInit, ElementRef, Renderer2 } from '@angular/core';



@Component({
  selector: 'app-landingpage',
  standalone: true,
  imports: [
    MatDividerModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    NgFor
  ],
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class LandingpageComponent {

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  projects: any = [{
    'title': 'PowerYou AI | Human Life OS', text: ` GenAI techonology analyzes your idea , priorties and goals then ofer personalized insights and
system to help you make optiomal chokices and take effective actions`, 'image': 'Project1.png'
  }, { 'title': 'Notice of Proposal App', text: ` Enabling residents to review submissions of the neighborhood's proposed developments online to expedite engagement.`, 'image': 'Project2.png' }, {
    'title': 'Gregora App', 'text': `A user-centric productivity app that addresses customers' work and efficiency-related pain points and frustrations.`, 'image': 'Project3.png'
  }];

  images = ['DS0.png', 'DS1.png', 'DS2.png', 'DS3.png', 'DS4.png', 'DS5.png', 'DS6.png', 'DS7.png', 'DS8.png']

  currentIndex: number = 0;


  updateSlidePosition() {
    const track = this?.el?.nativeElement?.querySelector('#slide-track');
    const firstChild = track?.children[0];

    const slideWidth: any = firstChild?.getBoundingClientRect()?.width;
    const transformValue = `translateX(${-slideWidth * this.currentIndex}px)`;
    this.renderer.setStyle(track, 'transform', transformValue);
  }
  nextSlide() {
    if (this.currentIndex < this.images.length - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0; // Loop back to the first slide
    }
    this.updateSlidePosition();
  }

  prevSlide() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.images.length - 1; // Loop back to the last slide
    }
    this.updateSlidePosition();
  }

}


