import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrongUrl404ComponentComponent } from './wrong-url404-component.component';

describe('WrongUrl404ComponentComponent', () => {
  let component: WrongUrl404ComponentComponent;
  let fixture: ComponentFixture<WrongUrl404ComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WrongUrl404ComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WrongUrl404ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
