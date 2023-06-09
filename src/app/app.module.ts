import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { LayoutModule } from '@angular/cdk/layout';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { NavigationComponent } from './navigation/navigation.component';
import { ButtonOverviewExampleComponent } from './pages/button-overview-example/button-overview-example.component';
import { CounterComponent } from './pages/counter/counter.component';
import { FormFieldDemoComponent } from './pages/form-field-demo/form-field-demo.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { RadioCheckboxExampleComponent } from './pages/radio-checkbox-example/radio-checkbox-example.component';
import { SignalsComponent } from './pages/signals/signals.component';
import { counterReducer } from './state/reducers/counter.reducer';
import { themeReducer } from './state/reducers/theme.reducer';
import { AppState } from './state/selectors/counter.selector';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    FormFieldDemoComponent,
    ButtonOverviewExampleComponent,
    RadioCheckboxExampleComponent,
    NavigationComponent,
    SignalsComponent,
    CounterComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    MaterialModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    StoreModule.forRoot<AppState>({
      counter: counterReducer,
      theme: themeReducer,
    }),
  ],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { floatLabel: 'auto' },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
