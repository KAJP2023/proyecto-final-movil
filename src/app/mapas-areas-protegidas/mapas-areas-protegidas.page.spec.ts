import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MapasAreasProtegidasPage } from './mapas-areas-protegidas.page';

describe('MapasAreasProtegidasPage', () => {
  let component: MapasAreasProtegidasPage;
  let fixture: ComponentFixture<MapasAreasProtegidasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MapasAreasProtegidasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
