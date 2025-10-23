import { Component, computed, signal } from '@angular/core';
import { Header } from '../header/header/header';

@Component({
  selector: 'app-angular-signal',
  imports: [Header],
  templateUrl: './angular-signal.html',
  styleUrl: './angular-signal.scss'
})
export class AngularSignal {
  counter = signal(0);
  doubleCount = computed(() => this.counter() * 2);

  increment() {
    this.counter.update(c => c + 1);
  }

  decrement() {
    this.counter.update(c => c - 1);
  }

  reset() {
    this.counter.set(0);
  }

}
