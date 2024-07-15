import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchboutonComponent } from './switchbouton.component';

describe('SwitchboutonComponent', () => {
  let component: SwitchboutonComponent;
  let fixture: ComponentFixture<SwitchboutonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwitchboutonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwitchboutonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
