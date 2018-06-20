import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NatureTableauComponent } from './nature-tableau.component';

describe('NatureTableauComponent', () => {
  let component: NatureTableauComponent;
  let fixture: ComponentFixture<NatureTableauComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NatureTableauComponent ]
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
