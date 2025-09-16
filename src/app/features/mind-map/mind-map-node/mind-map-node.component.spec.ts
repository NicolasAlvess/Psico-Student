import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MindMapNodeComponent } from './mind-map-node.component';

describe('MindMapNodeComponent', () => {
  let component: MindMapNodeComponent;
  let fixture: ComponentFixture<MindMapNodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MindMapNodeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MindMapNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
