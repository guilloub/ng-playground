import { createSelector } from '@ngrx/store';
import { CounterState } from '../reducers/counter.reducer';

export interface AppState {
  counter: CounterState;
  // theme: 'A' | 'B' | 'C';
}

export const counterKey = 'counter';

export const selectCounter = (state: AppState) => state.counter;

export const selectCount = createSelector(
  selectCounter,
  (state: CounterState) => state.count
);

export const selectSquare = createSelector(
  selectCounter,
  (state) => state.count * state.count
);
