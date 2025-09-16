import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeuronsMapComponent } from './neurons-map.component';

describe('NeuronsMapComponent', () => {
  let component: NeuronsMapComponent;
  let fixture: ComponentFixture<NeuronsMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NeuronsMapComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NeuronsMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
