import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPanelViewComponent } from './user-panel-view.component';

describe('UserPanelViewComponent', () => {
  let component: UserPanelViewComponent;
  let fixture: ComponentFixture<UserPanelViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPanelViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPanelViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
