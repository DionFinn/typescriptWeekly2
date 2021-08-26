import { Colours } from './EnumColour';
import { Cookie } from './Cookie';
export class SprinkleCookie extends Cookie {
  sprinkleColour: Colours;

  constructor(name: string, sprinkleColour: string) {
    super(name);
    this.sprinkleColour = Colours.Pink;
  }
}