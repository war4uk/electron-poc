import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectOneComponentComponent } from './project-one-component.component';

describe('ProjectOneComponentComponent', () => {
  let component: ProjectOneComponentComponent;
  let fixture: ComponentFixture<ProjectOneComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectOneComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectOneComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
