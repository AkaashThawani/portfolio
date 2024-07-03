import { Component, ViewEncapsulation } from '@angular/core';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatButtonModule,MatIconModule,RouterLink],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
  encapsulation:ViewEncapsulation.None
})
export class ProjectsComponent {

}
