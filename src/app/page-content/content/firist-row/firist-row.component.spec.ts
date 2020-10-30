import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiristRowComponent } from './firist-row.component';

describe('FiristRowComponent', () => {
  let component: FiristRowComponent;
  let fixture: ComponentFixture<FiristRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiristRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiristRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
