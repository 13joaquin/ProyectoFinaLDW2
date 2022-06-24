import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTiSComponent } from './card-ti-s.component';

describe('CardTiSComponent', () => {
  let component: CardTiSComponent;
  let fixture: ComponentFixture<CardTiSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardTiSComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardTiSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
