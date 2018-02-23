import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
  <h1>Zoo Animal Tracker</h1>

  <animal-list [childAnimalList]="masterAnimalList" (clickSender)="editAnimal($event)"></animal-list>
  <br>
  <edit-animal [childSelectedAnimal]="selectedAnimal" (doneButtonClickedSender)="finishedEditing()"></edit-animal>
  <new-animal (newAnimalSender)="addAnimal($event)"></new-animal>
  </div>
  `
})

export class AppComponent {
  masterAnimalList: Animal[] = [
    new Animal('Jean', 'Fruit Bat', 8, 'Fruitarian', 'Beach', 2, 'Male', 'Bright colors', 'Being annoyed'),
    new Animal('Isaac', 'Boar', 10, 'Omnivore', 'Forest cabin', 2, 'Male', 'Relaxing', 'Being deceived')
  ];
  selectedAnimal: null;

  editAnimal(clickedAnimal){
    this.selectedAnimal = clickedAnimal;
  }

  finishedEditing(){
    this.selectedAnimal = null;
  }

  addAnimal(newAnimalFromChild: Animal){
    this.masterAnimalList.push(newAnimalFromChild);
  }

}
