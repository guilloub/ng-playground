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

  constructor(private overlayContainer: OverlayContainer) {}

  @HostBinding('class')
  public get themeMode() {
    return this.darkModeUI ? 'dark-theme' : 'light-theme';
  }

  public handleDarkThemeOn(isDark: boolean) {
    this.darkModeUI = isDark;
    this.applyThemeToOverlyContainers();
  }

  private applyThemeToOverlyContainers() {
    const overlayContainerClasses =
      this.overlayContainer.getContainerElement().classList;
    overlayContainerClasses.remove('dark-theme', 'light-theme');
    overlayContainerClasses.add(this.themeMode);
  }
}
