import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentStyleGuide } from './component-style-guide';

describe('ComponentStyleGuide', () => {
  let component: ComponentStyleGuide;
  let fixture: ComponentFixture<ComponentStyleGuide>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentStyleGuide]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentStyleGuide);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
