import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model'

@Component({
  selector: 'animal-list',
  template: `
  <ul>
    <li *ngFor="let currentAnimal of childAnimalList">{{currentAnimal.name}} <button (click)="editClicked(currentAnimal)">Edit!</button> <br> {{currentAnimal.species}} </li>
  </ul>
  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();

  editClicked(animalToEdit: Animal) {
    this.clickSender.emit(animalToEdit);
  }
}
