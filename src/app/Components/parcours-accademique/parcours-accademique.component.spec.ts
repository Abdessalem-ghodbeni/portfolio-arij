import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParcoursAccademiqueComponent } from './parcours-accademique.component';

describe('ParcoursAccademiqueComponent', () => {
  let component: ParcoursAccademiqueComponent;
  let fixture: ComponentFixture<ParcoursAccademiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParcoursAccademiqueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParcoursAccademiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
