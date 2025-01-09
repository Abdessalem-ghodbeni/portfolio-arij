import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpProfessionnelComponent } from './exp-professionnel.component';

describe('ExpProfessionnelComponent', () => {
  let component: ExpProfessionnelComponent;
  let fixture: ComponentFixture<ExpProfessionnelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpProfessionnelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpProfessionnelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
