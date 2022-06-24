import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardtlistComponent } from './cardtlist.component';

describe('CardtlistComponent', () => {
  let component: CardtlistComponent;
  let fixture: ComponentFixture<CardtlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardtlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardtlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
