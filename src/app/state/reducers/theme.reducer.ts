import { createReducer, on } from '@ngrx/store';
import { nextTheme, toggleDensity } from '../actions/theme.actions';

export interface ThemeState {
  toggleCount: number;
  density: 'small' | 'medium';
}
export const initialState: ThemeState = { density: 'medium', toggleCount: 0 };

export const themeReducer = createReducer(
  initialState,
  on(nextTheme, (state) => ({ ...state, toggleCount: state.toggleCount + 1 })),
  on(toggleDensity, (state) => ({
    ...state,
    density: state.density === 'small' ? 'medium' : 'small',
  }))
);
