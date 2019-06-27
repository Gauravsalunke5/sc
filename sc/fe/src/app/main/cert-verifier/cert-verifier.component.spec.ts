import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CertVerifierComponent } from './cert-verifier.component';

describe('CertVerifierComponent', () => {
  let component: CertVerifierComponent;
  let fixture: ComponentFixture<CertVerifierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CertVerifierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CertVerifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
