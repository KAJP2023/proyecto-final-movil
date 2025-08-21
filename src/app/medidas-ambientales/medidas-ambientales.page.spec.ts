import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MedidasAmbientalesPage } from './medidas-ambientales.page';

describe('MedidasAmbientalesPage', () => {
  let component: MedidasAmbientalesPage;
  let fixture: ComponentFixture<MedidasAmbientalesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MedidasAmbientalesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
