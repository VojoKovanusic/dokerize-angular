import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecundRowComponent } from './secund-row.component';

describe('SecundRowComponent', () => {
  let component: SecundRowComponent;
  let fixture: ComponentFixture<SecundRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecundRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecundRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
