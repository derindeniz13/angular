import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule], // <-- FormsModule burada eklendi
  templateUrl: './app.html',
  styleUrls: ['./app.css'] // küçük bir typo vardı styleUrl → styleUrls
})
export class App {
  protected readonly title = signal('angular-proje');
}

