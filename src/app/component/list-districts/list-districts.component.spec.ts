import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDistrictsComponent } from './list-districts.component';

describe('ListDistrictsComponent', () => {
  let component: ListDistrictsComponent;
  let fixture: ComponentFixture<ListDistrictsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListDistrictsComponent]
    });
    fixture = TestBed.createComponent(ListDistrictsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
