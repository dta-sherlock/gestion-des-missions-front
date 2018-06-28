import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireMissionsComponent } from './formulaire-missions.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormulaireMissionsServiceService } from '../services/formulaireMissionService/formulaire-missions.service';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

describe('FormulaireMissionsComponent', () => {
  let component: FormulaireMissionsComponent;
  let fixture: ComponentFixture<FormulaireMissionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormulaireMissionsComponent],
      imports: [HttpClientTestingModule, ReactiveFormsModule, RouterTestingModule],
      providers: [FormulaireMissionsServiceService]
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
