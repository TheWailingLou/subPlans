import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimplePlanChoicesComponent } from './simple-plan-choices.component';

describe('SimplePlanChoicesComponent', () => {
  let component: SimplePlanChoicesComponent;
  let fixture: ComponentFixture<SimplePlanChoicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimplePlanChoicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimplePlanChoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
