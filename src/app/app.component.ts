import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, HostBinding } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from './state/selectors/counter.selector';
import {
  selectDensityName,
  selectThemeName,
} from './state/selectors/theme.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ng-playground';

  public themeName = 'light';
  public densityName = 'small';

  constructor(
    private overlayContainer: OverlayContainer,
    private store: Store<AppState>
  ) {
    this.store.pipe(select(selectThemeName)).subscribe((themeName) => {
      this.themeName = themeName;
      this.applyThemeToOverlayContainers();
    });

    this.store.pipe(select(selectDensityName)).subscribe((densityName) => {
      this.densityName = densityName;
      this.applyThemeToOverlayContainers();
    });
  }

  @HostBinding('class')
  public get themeClass() {
    const theme = `${this.themeName}-theme`;
    const density = `${this.densityName}-density`;

    return theme + ' ' + density;
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

    const theme = `${this.themeName}-theme`;
    const density = `${this.densityName}-density`;

    overlayContainerClasses.add(theme, density);
  }
}
