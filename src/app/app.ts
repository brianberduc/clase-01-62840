import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  // Cuando queremos mostrar un componente lo vamos hacer mediante su selector, en este caso app-root.
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('Hola mundo!!');
  userName = 'Brian Berduc';
  userAge = 30;
}
