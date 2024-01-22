import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesboxComponent } from './salesbox.component';

describe('SalesboxComponent', () => {
  let component: SalesboxComponent;
  let fixture: ComponentFixture<SalesboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalesboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
