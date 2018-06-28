import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableauMissionEnAttenteValidationComponent } from './tableau-mission-en-attente-validation.component';
import { RecupMissionsService } from '../services/recupMissionService/recup-missions.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('TableauMissionEnAttenteValidationComponent', () => {
  let component: TableauMissionEnAttenteValidationComponent;
  let fixture: ComponentFixture<TableauMissionEnAttenteValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableauMissionEnAttenteValidationComponent ],
      providers: [RecupMissionsService],
      imports: [RouterTestingModule, HttpClientTestingModule]
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
