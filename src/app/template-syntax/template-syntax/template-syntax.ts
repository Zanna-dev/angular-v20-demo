import { Component } from '@angular/core';
import { Header } from '../../header/header/header';

@Component({
  selector: 'app-template-syntax',
  imports: [Header],
  templateUrl: './template-syntax.html',
  styleUrl: './template-syntax.scss'
})
export class TemplateSyntax {
  base = 3;
  exponent = 4;
  colWidth = 12;
  person = { name: 'Alice', age: 30 };

}
