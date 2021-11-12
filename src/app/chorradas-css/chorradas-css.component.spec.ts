import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChorradasCssComponent } from './chorradas-css.component';

describe('ChorradasCssComponent', () => {
  let component: ChorradasCssComponent;
  let fixture: ComponentFixture<ChorradasCssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChorradasCssComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChorradasCssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
