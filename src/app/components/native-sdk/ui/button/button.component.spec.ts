import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NativeButton } from './button.component';

describe('ButtonComponent', () => {
  let component: NativeButton;
  let fixture: ComponentFixture<NativeButton>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NativeButton ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NativeButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
