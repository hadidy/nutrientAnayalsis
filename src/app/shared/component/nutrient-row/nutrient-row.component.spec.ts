import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NutrientRowComponent } from './nutrient-row.component';

describe('NutrientRowComponent', () => {
  let component: NutrientRowComponent;
  let fixture: ComponentFixture<NutrientRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NutrientRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NutrientRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
