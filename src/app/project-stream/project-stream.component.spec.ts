import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectStreamComponent } from './project-stream.component';

describe('ProjectStreamComponent', () => {
  let component: ProjectStreamComponent;
  let fixture: ComponentFixture<ProjectStreamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectStreamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectStreamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
