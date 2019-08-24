import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemploGithub01Component } from './ejemplo-github01.component';

describe('EjemploGithub01Component', () => {
  let component: EjemploGithub01Component;
  let fixture: ComponentFixture<EjemploGithub01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EjemploGithub01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EjemploGithub01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
