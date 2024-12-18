import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirsPresentationComponent } from './firs-presentation.component';

describe('FirsPresentationComponent', () => {
  let component: FirsPresentationComponent;
  let fixture: ComponentFixture<FirsPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirsPresentationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirsPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
