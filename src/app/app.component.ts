import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, HostBinding } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from './state/selectors/counter.selector';
import { selectThemeName } from './state/selectors/theme.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ng-playground';

  public themeName = 'light';
  public denseModeUI = false;

  constructor(
    private overlayContainer: OverlayContainer,
    private store: Store<AppState>
  ) {
    this.store.pipe(select(selectThemeName)).subscribe((themeName) => {
      this.themeName = themeName;
      this.applyThemeToOverlayContainers();
    });
  }

  @HostBinding('class')
  public get themeClass() {
    const theme = `${this.themeName}-theme`;
    const density = this.denseModeUI ? 'high-density' : 'low-density';

    return theme + ' ' + density;
  }

  public handlHighDensityOn(isDense: boolean) {
    this.denseModeUI = isDense;
    this.applyThemeToOverlayContainers();
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
    const density = this.denseModeUI ? 'high-density' : 'low-density';

    overlayContainerClasses.add(theme, density);
  }
}
