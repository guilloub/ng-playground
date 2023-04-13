import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFieldDemoComponent } from './form-field-demo.component';

describe('FormFieldDemoComponent', () => {
  let component: FormFieldDemoComponent;
  let fixture: ComponentFixture<FormFieldDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormFieldDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormFieldDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
