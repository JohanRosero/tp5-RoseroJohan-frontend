import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTikcketComponent } from './form-tikcket.component';

describe('FormTikcketComponent', () => {
  let component: FormTikcketComponent;
  let fixture: ComponentFixture<FormTikcketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormTikcketComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormTikcketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
