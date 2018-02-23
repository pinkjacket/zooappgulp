import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
  <h1>Zoo Animal Tracker</h1>

  <animal-list></animal-list>
  </div>
  `
})

export class AppComponent {

}
