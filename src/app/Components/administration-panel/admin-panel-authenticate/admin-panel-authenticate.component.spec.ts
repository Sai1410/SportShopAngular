import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPanelAuthenticateComponent } from './admin-panel-authenticate.component';

describe('AdminPanelAuthenticateComponent', () => {
  let component: AdminPanelAuthenticateComponent;
  let fixture: ComponentFixture<AdminPanelAuthenticateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPanelAuthenticateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPanelAuthenticateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
