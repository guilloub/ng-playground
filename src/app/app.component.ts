import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ng-playground';

  public darkModeUI = false;
  public denseModeUI = false;

  constructor(private overlayContainer: OverlayContainer) {}

  @HostBinding('class')
  public get themeClass() {
    const theme = this.darkModeUI ? 'random-theme' : 'light-theme';
    const density = this.denseModeUI ? 'high-density' : 'low-density';

    return theme + ' ' + density;
  }

  public handleDarkThemeOn(isDark: boolean) {
    this.darkModeUI = isDark;
    this.applyThemeToOverlayContainers();
  }

  public handlHighDensityOn(isDense: boolean) {
    this.denseModeUI = isDense;
    this.applyThemeToOverlayContainers();
  }

  private applyThemeToOverlayContainers() {
    const overlayContainerClasses =
      this.overlayContainer.getContainerElement().classList;

    overlayContainerClasses.remove(
      'random-theme',
      'light-theme',
      'high-density',
      'low-density'
    );

    const theme = this.darkModeUI ? 'random-theme' : 'light-theme';
    const density = this.denseModeUI ? 'high-density' : 'low-density';

    overlayContainerClasses.add(theme, density);
  }
}
