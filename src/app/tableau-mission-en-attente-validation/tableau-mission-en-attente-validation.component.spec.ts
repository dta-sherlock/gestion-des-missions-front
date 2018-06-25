import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableauMissionEnAttenteValidationComponent } from './tableau-mission-en-attente-validation.component';

describe('TableauMissionEnAttenteValidationComponent', () => {
  let component: TableauMissionEnAttenteValidationComponent;
  let fixture: ComponentFixture<TableauMissionEnAttenteValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableauMissionEnAttenteValidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableauMissionEnAttenteValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
