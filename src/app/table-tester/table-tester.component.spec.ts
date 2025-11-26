import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableTesterComponent } from './table-tester.component';

describe('TableTesterComponent', () => {
  let component: TableTesterComponent;
  let fixture: ComponentFixture<TableTesterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableTesterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableTesterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
