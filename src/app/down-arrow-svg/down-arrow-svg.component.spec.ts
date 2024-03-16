import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownArrowSvgComponent } from './down-arrow-svg.component';

describe('DownArrowSvgComponent', () => {
  let component: DownArrowSvgComponent;
  let fixture: ComponentFixture<DownArrowSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DownArrowSvgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DownArrowSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
