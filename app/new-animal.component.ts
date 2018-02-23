import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'new-animal',
  template: `
    <h1>New Resident</h1>
    <div>
     <label>Enter name:</label>
     <input #newName>
     <label>Enter species:</label>
     <input #newSpecies>
     <label>Enter age in years:</label>
     <input #newAge>
     <label>Enter dietary preferences:</label>
     <input #newDiet>
     <label>Enter location:</label>
     <input #newLocation>
     <label>Enter number of caretakers:</label>
     <input #newCaretakers>
     <label>Enter sex:</label>
     <input #newSex>
     <label>Enter what they like:</label>
     <input #newLike>
     <label>Enter what they don't like:</label>
     <input #newDislike>
     <button (click)="submitForm(newName.value, newSpecies.value, newAge.value, newDiet.value, newLocation.value, newCaretakers.value, newSex.value, newLike.value, newDislike.value); newName.value=''; newSpecies.value=''; newAge.value=''; newDiet.value=''; newLocation.value=''; newCaretakers.value=''; newSex.value=''; newLike.value=''; newDislike.value='';">Add</button>
   </div>
  `
})

export class NewAnimalComponent {
  @Output() newAnimalSender = new EventEmitter();
  submitForm(name: string, species: string, age: number, diet: string, location: string, caretakers: number, sex: string, like: string, dislike: string){
    var newAnimalToAdd: Animal = new Animal(name, species, age, diet, location, caretakers, sex, like, dislike);
    this.newAnimalSender.emit(newAnimalToAdd)
  }
}
