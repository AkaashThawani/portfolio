import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltip } from '@angular/material/tooltip';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatTooltip, CommonModule,MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
  

  icons = [{ text: 'Bē', tooltip: 'Behance', link: 'https://www.behance.net/pranjalsharma17' }, { text: 'M', tooltip: 'Medium', link: 'https://medium.com/@pranjalsharma1795' }]
  iconTooltip: any;

}
