import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, EventEmitter, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  @Output() darkThemeOn: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() highDensityOn: EventEmitter<boolean> = new EventEmitter<boolean>();

  count$: Observable<number>;
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  // TODO refactor with ngrx store
  isDark = false;
  isDense = false;
  private darkThemeIcon = 'nightlight_round';
  // private darkThemeIcon = 'celebration';
  private lightThemeIcon = 'wb_sunny';
  lightDarkToggleIcon = this.lightThemeIcon;

  private densitySmallIcon = 'density_small';
  private densityLargeIcon = 'density_medium';
  densityIcon = this.densityLargeIcon;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private store: Store<{ count: number }>
  ) {
    this.count$ = store.select('count');
  }

  public doToggleLightDark() {
    this.isDark = !this.isDark;
    this.lightDarkToggleIcon = this.isDark
      ? this.lightThemeIcon
      : this.darkThemeIcon;
    this.darkThemeOn.emit(this.isDark);
  }

  public doToggleDensity() {
    this.isDense = !this.isDense;
    this.densityIcon = this.isDense
      ? this.densityLargeIcon
      : this.densitySmallIcon;
    this.highDensityOn.emit(this.isDense);
  }
}
