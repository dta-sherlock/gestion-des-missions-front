import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NatureTableauComponent } from './nature-tableau.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('NatureTableauComponent', () => {
  let component: NatureTableauComponent;
  let fixture: ComponentFixture<NatureTableauComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NatureTableauComponent ],
      imports: [ReactiveFormsModule, RouterTestingModule, HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NatureTableauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
