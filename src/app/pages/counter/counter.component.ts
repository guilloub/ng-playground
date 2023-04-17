import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import {
  decrement,
  increment,
  reset,
} from 'src/app/state/actions/counter.actions';
import {
  AppState,
  selectCount,
} from 'src/app/state/selectors/counter.selector';
import { execTime } from 'src/decorators/exec-time.decorator';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent {
  count$ = this.store.pipe(select(selectCount));

  constructor(private store: Store<AppState>) {}

  @execTime
  increment() {
    this.store.dispatch(increment());
  }

  @execTime
  decrement() {
    this.store.dispatch(decrement());
  }

  @execTime
  reset() {
    this.store.dispatch(reset());
  }
}
