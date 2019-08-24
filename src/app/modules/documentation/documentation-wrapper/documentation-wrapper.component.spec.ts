import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentationWrapperComponent } from './documentation-wrapper.component';

describe('DocumentationWrapperComponent', () => {
  let component: DocumentationWrapperComponent;
  let fixture: ComponentFixture<DocumentationWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentationWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentationWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
