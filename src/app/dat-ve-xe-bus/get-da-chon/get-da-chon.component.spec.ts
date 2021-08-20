import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetDaChonComponent } from './get-da-chon.component';

describe('GetDaChonComponent', () => {
  let component: GetDaChonComponent;
  let fixture: ComponentFixture<GetDaChonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetDaChonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetDaChonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
