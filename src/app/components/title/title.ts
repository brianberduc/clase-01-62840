import { Component } from '@angular/core';

@Component({
  selector: 'app-title',
  standalone: false,
  template: ` <h1>title works!</h1> `, 
  styles: `<h1>
  text-decorator: underline;
  </h1>`,
    // escribe el html y el scss directamente en este archivo en el template y en el styles
})
export class Title {}
