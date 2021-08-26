import { Colours } from './EnumColour';
export class Cookie {
 name :  string;
 colour : string;
 chocolateChipNum : number;

 constructor(name : string){
  this.name = name;
  this.colour = 'Brown';
  this.chocolateChipNum = 0;
  }
}