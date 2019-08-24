import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RespuestaDocumentacionComponent } from './respuesta-documentacion.component';

describe('RespuestaDocumentacionComponent', () => {
  let component: RespuestaDocumentacionComponent;
  let fixture: ComponentFixture<RespuestaDocumentacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RespuestaDocumentacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RespuestaDocumentacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
