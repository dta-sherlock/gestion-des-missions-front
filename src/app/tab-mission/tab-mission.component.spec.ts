import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabMissionComponent } from './tab-mission.component';

describe('TabMissionComponent', () => {
  let component: TabMissionComponent;
  let fixture: ComponentFixture<TabMissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabMissionComponent ]
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
