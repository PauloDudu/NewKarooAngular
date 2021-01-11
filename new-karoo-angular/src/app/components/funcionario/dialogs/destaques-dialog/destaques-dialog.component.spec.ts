import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestaquesDialogComponent } from './destaques-dialog.component';

describe('DestaquesDialogComponent', () => {
  let component: DestaquesDialogComponent;
  let fixture: ComponentFixture<DestaquesDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DestaquesDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DestaquesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
