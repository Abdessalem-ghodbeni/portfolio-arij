import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecapExpProfessionnelComponent } from './recap-exp-professionnel.component';

describe('RecapExpProfessionnelComponent', () => {
  let component: RecapExpProfessionnelComponent;
  let fixture: ComponentFixture<RecapExpProfessionnelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecapExpProfessionnelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecapExpProfessionnelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
