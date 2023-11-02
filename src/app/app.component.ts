import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { User } from './model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public flagTest: boolean = true;

  public arrayTest: User[] = [
    { id: 1, name: 'user' },
    { id: 2, name: 'mario' },
    { id: 3, name: 'rossi' },
  ];
}
