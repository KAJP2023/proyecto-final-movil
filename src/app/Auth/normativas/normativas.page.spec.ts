import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NormativasPage } from './normativas.page';

describe('NormativasPage', () => {
  let component: NormativasPage;
  let fixture: ComponentFixture<NormativasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NormativasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
