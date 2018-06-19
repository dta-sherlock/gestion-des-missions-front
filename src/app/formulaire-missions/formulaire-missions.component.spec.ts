import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireMissionsComponent } from './formulaire-missions.component';

describe('FormulaireMissionsComponent', () => {
  let component: FormulaireMissionsComponent;
  let fixture: ComponentFixture<FormulaireMissionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormulaireMissionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaireMissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
