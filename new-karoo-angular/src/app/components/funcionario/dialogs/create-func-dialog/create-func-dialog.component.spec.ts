import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFuncDialogComponent } from './create-func-dialog.component';

describe('CreateFuncDialogComponent', () => {
  let component: CreateFuncDialogComponent;
  let fixture: ComponentFixture<CreateFuncDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateFuncDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateFuncDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
