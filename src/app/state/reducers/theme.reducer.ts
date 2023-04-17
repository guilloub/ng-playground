import { createReducer, on } from '@ngrx/store';
import { nextTheme } from '../actions/theme.actions';

export interface ThemeState {
  toggleCount: number;
  theme: 'light' | 'dark' | 'surprise-me';
}
export const initialState: ThemeState = { theme: 'light', toggleCount: 0 };

export const themeReducer = createReducer(
  initialState,
  on(nextTheme, (state) => ({ ...state, toggleCount: state.toggleCount + 1 }))
);
