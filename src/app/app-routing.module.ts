import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonOverviewExampleComponent } from './pages/button-overview-example/button-overview-example.component';
import { CounterComponent } from './pages/counter/counter.component';
import { FormFieldDemoComponent } from './pages/form-field-demo/form-field-demo.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { RadioCheckboxExampleComponent } from './pages/radio-checkbox-example/radio-checkbox-example.component';
import { SignalsComponent } from './pages/signals/signals.component';

const routes: Routes = [
  {
    path: 'radio',
    component: RadioCheckboxExampleComponent,
    title: 'Radio & Checkbox',
  },
  { path: 'formfield', component: FormFieldDemoComponent, title: 'Form Field' },
  { path: 'signals', component: SignalsComponent, title: 'Signals' },
  {
    path: 'counter',
    component: CounterComponent,
    title: 'Ngrx store | counter',
  },
  {
    path: 'button',
    component: ButtonOverviewExampleComponent,
    title: 'Button',
  },
  { path: '', redirectTo: '/radio', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }, // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
