import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoticiasAmbientalesPage } from './noticias-ambientales.page';

describe('NoticiasAmbientalesPage', () => {
  let component: NoticiasAmbientalesPage;
  let fixture: ComponentFixture<NoticiasAmbientalesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticiasAmbientalesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
