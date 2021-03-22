import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectorsPage } from './sectors.page';

describe('SectorsPage', () => {
  let component: SectorsPage;
  let fixture: ComponentFixture<SectorsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectorsPage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectorsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
