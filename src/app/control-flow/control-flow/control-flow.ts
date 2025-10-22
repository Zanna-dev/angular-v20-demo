import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Header } from '../../header/header/header';

@Component({
  selector: 'app-control-flow',
  imports: [CommonModule, Header],
  templateUrl: './control-flow.html',
  styleUrl: './control-flow.scss'
})
export class ControlFlow {
  isLoggedIn = true;
  items = ['Apple', 'Banana', 'Cherry'];
  color = 'blue';
}
