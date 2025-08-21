import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VideosEducativosPage } from './videos-educativos.page';

describe('VideosEducativosPage', () => {
  let component: VideosEducativosPage;
  let fixture: ComponentFixture<VideosEducativosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VideosEducativosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
