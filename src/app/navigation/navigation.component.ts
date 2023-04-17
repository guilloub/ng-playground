import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { nextTheme, toggleDensity } from '../state/actions/theme.actions';
import { AppState } from '../state/selectors/counter.selector';
import {
  selectDensityIcon,
  selectThemeIcon,
  selectThemeName,
  selectToggleCount,
} from '../state/selectors/theme.selector';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  count$ = this.store.pipe(select(selectToggleCount));
  themeName$ = this.store.pipe(select(selectThemeName));
  themeIcon$ = this.store.pipe(select(selectThemeIcon));
  densityIcon$ = this.store.pipe(select(selectDensityIcon));

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private store: Store<AppState>
  ) {}

  public doToggleLightDark() {
    this.store.dispatch(nextTheme());
  }

  public doToggleDensity() {
    this.store.dispatch(toggleDensity());
  }
}
