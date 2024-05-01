import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PersonajeInfoPage } from './personaje-info.page';

describe('PersonajeInfoPage', () => {
  let component: PersonajeInfoPage;
  let fixture: ComponentFixture<PersonajeInfoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonajeInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
