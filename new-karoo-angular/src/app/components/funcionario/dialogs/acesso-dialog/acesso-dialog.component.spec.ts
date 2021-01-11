import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcessoDialogComponent } from './acesso-dialog.component';

describe('AcessoDialogComponent', () => {
  let component: AcessoDialogComponent;
  let fixture: ComponentFixture<AcessoDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcessoDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcessoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
