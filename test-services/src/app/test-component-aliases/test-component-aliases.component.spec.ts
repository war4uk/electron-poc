import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponentAliasesComponent } from './test-component-aliases.component';

describe('TestComponentAliasesComponent', () => {
  let component: TestComponentAliasesComponent;
  let fixture: ComponentFixture<TestComponentAliasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestComponentAliasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponentAliasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
