import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model'

@Component({
  selector: 'animal-list',
  template: `
  <select (change)="onChange($event.target.value)">
  <option value="allAnimals" selected="selected">Show All Animals</option>
  <option value="matureAnimals">Show Only Mature Animals</option>
  <option value="youngAnimals">Show Only Young Animals</option>
  </select>

  <ul>
    <li *ngFor="let currentAnimal of childAnimalList | ageFilter:filterByAge">{{currentAnimal.name}} <button (click)="editClicked(currentAnimal)">Edit!</button> <br> {{currentAnimal.species}} <br> Age: {{currentAnimal.age}} <br> Diet: {{currentAnimal.diet}} <br> Location: {{currentAnimal.location}} <br> # of Caretakers: {{currentAnimal.caretakers}} <br> Sex: {{currentAnimal.sex}} <br> Likes: {{currentAnimal.like}} <br> Dislikes: {{currentAnimal.dislike}}</li>
  </ul>
  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();

  filterByAge: string = "allAnimals";

  editClicked(animalToEdit: Animal) {
    this.clickSender.emit(animalToEdit);
  }

  onChange(optionFromMenu){
    this.filterByAge = optionFromMenu;
  }
}
