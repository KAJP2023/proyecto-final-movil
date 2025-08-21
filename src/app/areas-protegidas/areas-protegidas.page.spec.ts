import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AreasProtegidasPage } from './areas-protegidas.page';

describe('AreasProtegidasPage', () => {
  let component: AreasProtegidasPage;
  let fixture: ComponentFixture<AreasProtegidasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AreasProtegidasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
