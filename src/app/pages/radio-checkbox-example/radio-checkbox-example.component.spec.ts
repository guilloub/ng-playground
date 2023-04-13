import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioCheckboxExampleComponent } from './radio-checkbox-example.component';

describe('RadioCheckboxExampleComponent', () => {
  let component: RadioCheckboxExampleComponent;
  let fixture: ComponentFixture<RadioCheckboxExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadioCheckboxExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RadioCheckboxExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
