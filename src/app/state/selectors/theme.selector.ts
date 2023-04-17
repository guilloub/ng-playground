import { createSelector } from '@ngrx/store';
import { ThemeState } from '../reducers/theme.reducer';
import { AppState } from './counter.selector';

export const themeKey = 'theme';

export const selectTheme = (state: AppState) => state.theme;

export const selectToggleCount = createSelector(
  selectTheme,
  (state: ThemeState) => state.toggleCount
);

export const selectThemeName = createSelector(selectTheme, (state) => {
  const rest = state.toggleCount % 3;
  if (rest === 1) return 'dark';
  if (rest === 2) return 'surprise-me';
  return 'light';
});

export const selectThemeIcon = createSelector(selectTheme, (state) => {
  const rest = state.toggleCount % 3;
  if (rest === 1) return 'nightlight_round';
  if (rest === 2) return 'celebration';
  return 'wb_sunny';
});

export const selectDensityName = createSelector(selectTheme, (state) => {
  return state.density;
});

export const selectDensityIcon = createSelector(
  selectDensityName,
  (densityName) => {
    return `density_${densityName}`;
  }
);
