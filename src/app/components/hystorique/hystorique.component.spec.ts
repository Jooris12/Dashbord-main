import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HystoriqueComponent } from './hystorique.component';

describe('HystoriqueComponent', () => {
  let component: HystoriqueComponent;
  let fixture: ComponentFixture<HystoriqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HystoriqueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HystoriqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
