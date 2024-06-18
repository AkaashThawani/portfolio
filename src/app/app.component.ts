import { Component } from '@angular/core';
import { MatTooltip } from '@angular/material/tooltip';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MatTooltip],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';

  icons=[{text:'Bē',tooltip:'Behance'},{text:'M',tooltip:'Medium'}]
iconTooltip: any;
}
