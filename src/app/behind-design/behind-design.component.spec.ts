import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BehindDesignComponent } from './behind-design.component';

describe('BehindDesignComponent', () => {
  let component: BehindDesignComponent;
  let fixture: ComponentFixture<BehindDesignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BehindDesignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BehindDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
