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
          <button (click)="finishedEditing()">Done</button>
        </div>
      </div>
  `
})

export class EditAnimalComponent {
  @Input() childSelectedAnimal: Animal;
}
