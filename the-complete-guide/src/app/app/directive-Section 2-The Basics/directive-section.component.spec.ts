import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveSectionComponent } from './directive-section.component';

describe('DirectiveSectionComponent', () => {
  let component: DirectiveSectionComponent;
  let fixture: ComponentFixture<DirectiveSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectiveSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectiveSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
