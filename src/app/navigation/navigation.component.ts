import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, EventEmitter, Output } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { nextTheme } from '../state/actions/theme.actions';
import { AppState } from '../state/selectors/counter.selector';
import {
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
  @Output() highDensityOn: EventEmitter<boolean> = new EventEmitter<boolean>();

  count$ = this.store.pipe(select(selectToggleCount));
  themeName$ = this.store.pipe(select(selectThemeName));
  themeIcon$ = this.store.pipe(select(selectThemeIcon));

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  // TODO refactor with ngrx store
  isDense = false;

  private densitySmallIcon = 'density_small';
  private densityLargeIcon = 'density_medium';
  densityIcon = this.densityLargeIcon;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private store: Store<AppState>
  ) {}

  public doToggleLightDark() {
    this.store.dispatch(nextTheme());
  }

  public doToggleDensity() {
    this.isDense = !this.isDense;
    this.densityIcon = this.isDense
      ? this.densityLargeIcon
      : this.densitySmallIcon;
    this.highDensityOn.emit(this.isDense);
  }
}
