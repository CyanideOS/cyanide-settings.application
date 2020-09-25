import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NativeCheckbox } from './checkbox.component';

describe('CheckboxComponent', () => {
  let component: NativeCheckbox;
  let fixture: ComponentFixture<NativeCheckbox>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NativeCheckbox ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NativeCheckbox);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
