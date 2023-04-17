import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, HostBinding } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from './state/selectors/counter.selector';
import {
  selectDensityClass,
  selectThemeClass,
} from './state/selectors/theme.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ng-playground';

  public themeClass = '';
  public densityClass = '';

  constructor(
    private overlayContainer: OverlayContainer,
    private store: Store<AppState>
  ) {
    this.store.pipe(select(selectThemeClass)).subscribe((themeClass) => {
      this.themeClass = themeClass;
      this.applyThemeToOverlayContainers();
    });

    this.store.pipe(select(selectDensityClass)).subscribe((densityClass) => {
      this.densityClass = densityClass;
      this.applyThemeToOverlayContainers();
    });
  }

  @HostBinding('class')
  public get appClass() {
    return this.themeClass + ' ' + this.densityClass;
  }

  private applyThemeToOverlayContainers() {
    const overlayContainerClasses =
      this.overlayContainer.getContainerElement().classList;

    overlayContainerClasses.remove(
      'surprise-me-theme',
      'light-theme',
      'dark-theme',
      'high-density',
      'low-density'
    );

    overlayContainerClasses.add(this.themeClass, this.densityClass);
  }
}
