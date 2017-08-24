import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectServiceMenuComponent } from './select-service-menu.component';

describe('SelectServiceMenuComponent', () => {
  let component: SelectServiceMenuComponent;
  let fixture: ComponentFixture<SelectServiceMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectServiceMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectServiceMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
