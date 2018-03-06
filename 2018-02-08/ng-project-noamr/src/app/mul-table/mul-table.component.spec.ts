import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MulTableComponent } from './mul-table.component';

describe('MulTableComponent', () => {
  let component: MulTableComponent;
  let fixture: ComponentFixture<MulTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MulTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MulTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
