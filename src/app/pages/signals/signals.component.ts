import { Component, computed, signal } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-signals',
  templateUrl: './signals.component.html',
  styleUrls: ['./signals.component.scss'],
})
export class SignalsComponent {
  a = signal(0);
  b = signal(0);

  sum = computed(() => this.a() + this.b());

  constructor() {
    timer(1000, 1000).subscribe(() => this.a.set(this.a() + 1));
    timer(2000, 2000).subscribe(() => this.b.set(this.b() + 20));
  }
}
