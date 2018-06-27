import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabMissionComponent } from './tab-mission.component';
import { RouterTestingModule } from '@angular/router/testing';
import { RecupMissionsService } from '../services/recupMissionService/recup-missions.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('TabMissionComponent', () => {
  let component: TabMissionComponent;
  let fixture: ComponentFixture<TabMissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabMissionComponent ],
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [RecupMissionsService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabMissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
