import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  template: `
    <div>
        <div *ngIf="childSelectedAnimal">
          <h3>{{childSelectedAnimal.name}}</h3>
          <hr>
          <h3>Edit Animal Details</h3>
          <label>Enter new name:</label>
          <input [(ngModel)]="childSelectedAnimal.name">
          <label>Enter new age:</label>
          <input [(ngModel)]="childSelectedAnimal.age">
          <label>Enter new number of caretakers:</label>
          <input [(ngModel)]="childSelectedAnimal.caretakers">
          <label>Enter new location:</label>
          <input [(ngModel)]="childSelectedAnimal.location">
          <button (click)="doneButtonClicked()">Done</button>
        </div>
      </div>
  `
})

export class EditAnimalComponent {
  @Input() childSelectedAnimal: Animal;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }
}
