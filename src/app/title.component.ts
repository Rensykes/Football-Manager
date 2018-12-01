import { Component, Input } from '@angular/core';

@Component({
  selector: 'title',
  template: `<h1>Fetching data Using  ${name}!</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class TitleComponent  {
  @Input() name: string;
}
