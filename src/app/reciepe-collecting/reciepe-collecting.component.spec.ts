import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReciepeCollectingComponent } from './reciepe-collecting.component';

describe('ReciepeCollectingComponent', () => {
  let component: ReciepeCollectingComponent;
  let fixture: ComponentFixture<ReciepeCollectingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReciepeCollectingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReciepeCollectingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
