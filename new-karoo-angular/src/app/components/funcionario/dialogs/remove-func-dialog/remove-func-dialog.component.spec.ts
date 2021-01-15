import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveFuncDialogComponent } from './remove-func-dialog.component';

describe('RemoveFuncDialogComponent', () => {
  let component: RemoveFuncDialogComponent;
  let fixture: ComponentFixture<RemoveFuncDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveFuncDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveFuncDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
