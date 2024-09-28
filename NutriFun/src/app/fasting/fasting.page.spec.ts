import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FastingPage } from './fasting.page';

describe('FastingPage', () => {
  let component: FastingPage;
  let fixture: ComponentFixture<FastingPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FastingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
