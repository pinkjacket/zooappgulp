import { Pipe, PipeTransform } from '@angular/core';
import { Animal } from './animal.model';

@Pipe({
  name: "ageFilter",
  pure: false
})


export class AgeFilterPipe implements PipeTransform {
  transform(input: Animal[], targetAge){
    let output: Animal[] = [];
    if(targetAge === "youngAnimals"){
      for (let i = 0; i < input.length; i++){
        if (input[i].age < 2){
          output.push(input[i]);
        }
      }
    return output;
  } else if(targetAge === "matureAnimals"){
    for (let i = 0; i < input.length; i++){
      if (input[i].age >= 2){
        output.push(input[i]);
      }
    }
    return output;
  } else {
      return input;
    }
  }
}
