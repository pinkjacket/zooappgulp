import { Component } from '@angular/core';
import { Animal } from './animal.model'

@Component({
  selector: 'animal-list',
  template: `
  <ul>
    <li *ngFor="let currentAnimal of animals">{{currentAnimal.name}}</li>
  </ul>
  `
})

export class AnimalListComponent {
  animals: Animal[] = [
    new Animal('Jean', 'Fruit Bat', 8, 'Fruitarian', 'Forest cabin', 2, 'Male', 'Bright colors', 'Being annoyed')
  ]
}
